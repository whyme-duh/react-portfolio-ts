import {useState, useEffect} from 'react';
import { apiClient } from '../../../api/client';

export interface TechStack {
  id: number;
  item: string;
  category?: string;
}

export interface ProjectList {
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

export const useProjectList = () =>{
    const [projects, setProject] = useState<ProjectList[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null> (null);

    useEffect(() => {
        const fetchProjectList = async () =>{
            try{
                const data = await apiClient.get<ProjectList[]>('/projects/');
                const dataList = (data as any).results ? (data as any).results[0] : data;
                setProject(dataList);
            }catch(err){
                console.log("Error occured.", err);
                setError("Error");
            }finally{
                setLoading(false);
            }
        };
        fetchProjectList();
    }, []);
    return {projects, loading, error};
}