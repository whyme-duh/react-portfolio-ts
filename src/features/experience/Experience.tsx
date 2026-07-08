import React from 'react';
import { useExperience } from './hooks/useExperience';

export const Experience: React.FC = () => {
  const { experience, loading, error } = useExperience();

  if (loading) {
    return (
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-white flex justify-center">
        <div className="font-mono text-gray-500 animate-pulse">Loading Timeline...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-white flex justify-center">
        <div className="font-mono text-red-500">{error}</div>
      </section>
    );
  }

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-white">
      
      <div className="mb-16">
    <h2 className="text-3xl font-extrabold mb-3 tracking-tight text-gray-900">
      Professional Experience
    </h2>
    <div className="flex gap-1">
      <div className="w-12 h-1.5 bg-blue-800 rounded"></div>
      <div className="w-4 h-1.5 bg-gray-900 rounded"></div>
    </div>
  </div>

  {/* Timeline Container */}
  <div className="max-w-4xl mx-auto">
    <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-10">
      
      {experience.map((exp) => (
        <div key={exp.id} className="relative pl-8 md:pl-12 group">
          
          {/* Timeline Dot (Sharper focus state) */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-[3px] border-gray-300 group-hover:border-blue-800 rounded-full transition-colors duration-300"></div>
          
          {/* Content Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header Grid: Role, Company, Year */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-1 pb-5 border-b border-gray-50">
              
              {/* Title & Role block (Strict vertical spacing) */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl text-gray-900 leading-tight">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-800 font-medium">
                   {/* Optional briefcase icon for visual anchor */}
                   <svg className="w-4 h-4 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                   </svg>
                   <span>{exp.company}</span>
                </div>
              </div>
              
              {/* Year Tag (Pushed to top right on desktop, aligned left on mobile) */}
              <span className="inline-flex w-fit items-center px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-mono uppercase tracking-widest rounded-md whitespace-nowrap h-fit shrink-0">
                {exp.start_date} - {exp.end_date}
              </span>
            </div>
            
            {/* Body Text */}
            <p className="text-gray-600 leading-relaxed text-sm text-justify">
              {exp.description}
            </p>
            
          </div>
        </div>
      ))}

    </div>
  </div>

    </section>
  );
};