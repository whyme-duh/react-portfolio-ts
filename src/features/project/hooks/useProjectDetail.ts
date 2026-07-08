import { useState, useEffect } from 'react';
import { apiClient } from '../../../api/client';

export interface TechStack {
  id: number;
  item: string;
  category?: string;
}

export interface ProjectDetail {
    id : number;
    name : string;
    brief_content: string;
    content : string;
    source_code : string;
    view_link : string;
    category : string;
    featured: boolean;
    slug : string;
    status : string;
    tech_stacks: TechStack[];
}

export const useProjectDetail = (slug: string | undefined) => {
  const [project, setProject] = useState<ProjectDetail | null >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If slug is undefined, we don't have a valid route
    if (!slug) {
      setError("Project identifier missing.");
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await apiClient.get<ProjectDetail>(`/projectdetail/${slug}/`);
        const dataList = Array.isArray(data) ? data[0] : (data as any).results ? (data as any).results[0] : data;

        setProject(dataList);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch project details:", err);
        setError("Could not retrieve project data. Please verify the URL.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]); // Re-run if the slug changes

  return { project, loading, error };
};