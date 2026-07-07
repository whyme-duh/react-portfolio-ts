import {useState, useEffect} from 'react';
import {apiClient} from '../../../api/client';

export interface Bio{
    id : number;
    logo : string | null;
    file : string;
    about_me_image: string | null;
    front_image : string | null;
    linkedin : string | null;
    description : string | null;
    instagram : string | null;
    pinterest : string | null;
    github: string | null;
    about_me_content : string | null;
}

export const useBio = () => {
    const [bio, setBio] = useState<Bio | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchBio = async () => {
            try{
                const data = await apiClient.get<Bio[] | Bio>('/bio/');
                const dataList = Array.isArray(data) ? data[0] : (data as any).results ? (data as any).results[0] : data;
                setBio(dataList);
            }catch(err){
                console.log(err);
                setError("Error occured");
            }finally{
                setLoading(false);
            }
        };
        fetchBio();
    }, []);
    return {bio, loading, error};
};