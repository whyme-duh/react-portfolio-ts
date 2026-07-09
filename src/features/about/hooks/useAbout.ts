import {useState, useEffect} from 'react';
import {apiClient} from '../../../api/client';

export interface HobbyItem{
    id : number;
    name : string;
}

export interface TechStackItem {
    id : number;
    category: string;
    item : string;
    focused:boolean|false;
}

export interface AboutMeData{
    id : number;
    about_me_content : string;
    hobbies : HobbyItem[];
    tech_stack : TechStackItem[];
}


export const useAbout = () =>{
    const [aboutData, setAboutData] = useState<AboutMeData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);
    
    useEffect(()=>{
        const fetchAbout = async () => {
            try{
                const data = await apiClient.get<AboutMeData[] | AboutMeData>('/about/');
                const dataList = Array.isArray(data) ? data[0] : (data as any).results ? (data as any).results[0] : data;
                setAboutData(dataList);
                setError(null);

            }catch(err){
                console.log(err);
                setError("Failed to load");
            }finally{
                setLoading(false)
            }
        };
        fetchAbout();
    }, []);
    return {aboutData, loading, error}
};