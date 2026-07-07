import { useState, useEffect } from 'react';
import { apiClient } from '../../../api/client';

export interface Project {
    id : number,
    name : string,
    brief_content: string,
    content : string,
    source_code : string,
    view_link : string,
    category : string,
    featured: boolean,
    slug : string,
    status : string,
    tech_stacks: string[]
}

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchProjects = async () => {
            try{
                const data = await apiClient.get<Project[]>('/projects/');
                console.log(data);
                const projectList = (data as any).results ? (data as any).results : data;
                setProjects(projectList);
                setError(null);
            }catch(err){
                console.log("Failed to fetch projects: ", err);
                setError("Failed to load!");
            }finally{
                setLoading(false);
            }
        };
        fetchProjects();

    }, []);
    return {projects, loading, error};
}