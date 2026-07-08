import React, { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { useProjectDetail } from './hooks/useProjectDetail';


export const ProjectDetail: React.FC = () => {
  const {slug} = useParams();
  const {project, loading, error} = useProjectDetail(slug);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
        <div className="font-mono text-gray-500 animate-pulse">Retrieving system data...</div>
      </div>
    );
  }

  // 2. Handle Error State
  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
        <div className="font-mono text-red-500">
          {error || "Project not found."}
        </div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-[#fdfbf7] py-20 px-8">
      <article className="max-w-3xl mx-auto">
        
        {/* Navigation */}
        <Link 
          to="/" 
          className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-800 transition-colors mb-12"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> 
          Back to Dashboard
        </Link>

        {/* Header Metadata */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 bg-blue-50 text-blue-800 text-[10px] font-bold uppercase tracking-widest rounded">
              {project.status || "Deployed"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {project.name}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.brief_content}
          </p>
        </header>

        {/* Content Body (Blog Style) */}
        <div className="prose prose-gray prose-lg max-w-none text-gray-800">
          
          <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900">Technical Inventory</h2>
          <div className="flex flex-wrap gap-2 not-prose mb-12">
            {project.tech_stacks.map((tech) => (
              <span key={tech.id} className="px-3 py-1 bg-white border border-gray-200 rounded font-mono text-xs text-gray-600">
                {tech.item}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900">Architecture Overview</h2>
          <p className="leading-relaxed mb-6">
            Detailed documentation for this system is currently being compiled. This section is structured to pull structured documentation directly from your DRF API, allowing for comprehensive technical case studies.
          </p>

          <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900">Key Features</h2>
          <ul className="space-y-3 mb-12">
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span>Modular architecture designed for scalability and high availability.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span>Optimized data flow using DRF serializer depth management.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-800 font-bold">•</span>
              <span>End-to-end type safety with TypeScript interfaces.</span>
            </li>
          </ul>

        </div>

        {/* Footer Actions */}
        <footer className="mt-20 pt-12 border-t border-gray-100 flex gap-4">
          {project.view_link && (
            <a href={project.view_link} className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded hover:bg-blue-800 transition-colors">
              Launch Live Demo
            </a>
          )}
          {project.source_code && (
            <a href={project.source_code} className="px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded hover:border-gray-400 transition-colors">
              View Source Code
            </a>
          )}
        </footer>

      </article>
    </div>
  );
};