import { useState, useEffect } from 'react';
import { apiClient } from '../../../api/client';

// 1. Map your Django Experience model
export interface Experience {
  id: number;
  role: string;
  company: string;
  year: string; // e.g., "2024 - Present"
  description: string;
}

// 2. Mock data to use until your backend is fully wired
const MOCK_EXPERIENCE: Experience[] = [
  { 
    id: 1,
    role: "Software Engineering Expert", 
    company: "AfterQuery", 
    year: "2024 - Present",
    description: "Designing and implementing robust backend architectures, APIs, and system integrations."
  },
  { 
    id: 2,
    role: "AI Trainer & Data Evaluator", 
    company: "Invisible Technologies", 
    year: "2024 - Present",
    description: "Evaluating complex AI outputs, fine-tuning language models, and ensuring systemic data accuracy."
  },
  { 
    id: 3,
    role: "MBA Candidate", 
    company: "Manipal University Jaipur", 
    year: "2024 - 2026",
    description: "Focusing on strategic business management to bridge the gap between software engineering and product strategy."
  }
];

export const useExperience = () => {
  const [experience, setExperience] = useState<Experience[]>(MOCK_EXPERIENCE);
  const [loading, setLoading] = useState<boolean>(false); // Set to true when hitting real API
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // When you are ready for live data, uncomment this block:
    /*
    const fetchExperience = async () => {
      try {
        setLoading(true);
        const data = await apiClient.get<Experience[]>('/experience/');
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
    */
  }, []);

  return { experience, loading, error };
};