import { useState, useEffect } from 'react';
import { apiClient } from '../../../api/client';

// 1. Map your Django Experience model
export interface Experience {
  id: number;
  title: string;
  company: string;
  start_date: string; 
  end_date: string; 
  still_working: boolean;
  description: string;
}



export const useExperience = () => {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Set to true when hitting real API
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        setLoading(true);
        const data = await apiClient.get<Experience[]>('/experiences/');
        const parsedData = (data as any).results ? (data as any).results : data;
        setExperience(parsedData);
      } catch (err) {
        console.error("Failed to fetch experience:", err);
        setError("Failed to load timeline data.");
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  return { experience, loading, error };
};