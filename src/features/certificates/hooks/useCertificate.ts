import {useState, useEffect} from 'react';
import { apiClient } from '../../../api/client';

export interface TechStack{
    id : number;
    category: string;
    item:string;
}

export interface Certification{
    id : number;
    name : string;
    issuing_organization: string;
    issue_date: string;
    credential_url : string;
    skills : TechStack[];
}

export const useCertificate = () =>{
    const [certification, setCertification] = useState<Certification[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(()=>{
        const fetchCertification = async () =>{
            try{
                const data = await apiClient.get<Certification[]>('/certification/');
                const dataList = (data as any).results ? (data as any).results : data;
                setCertification(dataList);
                 
            }catch(err){
                console.log(err);
                setError("Error occured");
            }finally{
                setLoading(false);
            }
        };
        fetchCertification();
    }, []);
    return {certification, loading, error};
};