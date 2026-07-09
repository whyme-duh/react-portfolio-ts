import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useProjectDetail } from './hooks/useProjectDetail';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';


export const ProjectDetail: React.FC = () => {

  const {slug} = useParams();
  const {project, loading, error} = useProjectDetail(slug);
  useDocumentTitle(project?.name || project?.name || "Loading...");


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
          Back to Home
        </Link>

        {/* Header Metadata */}
        <header className="mb-12 text-left">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {project.name}
          </h1>
          <div className="flex items-start gap-3 mb-4">
            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${
                project.status === 'Deployed' ? 'bg-green-50 text-green-700 border-green-200' : 
                project.status === 'Under-Development' ? 'bg-orange-50 text-orange-700 border-orange-200' : 
                'bg-blue-50 text-blue-600 border-blue-200'
              }`}>
              {project.status}
            </span>
            <span className="px-2.5 py-1 bg-gray-100 text-black text-[10px] font-bold uppercase tracking-widest rounded">
              {project.category}
            </span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.brief_content}
          </p>
        </header>

        {/* Content Body (Blog Style) */}
        <div className="prose prose-gray prose-lg max-w-none text-gray-800">
          
          <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900 text-left">Technical Inventory</h2>
          <div className="flex flex-wrap gap-2 not-prose mb-12">
            {project.tech_stacks.map((tech) => (
              <span key={tech.id} className="px-3 py-1 bg-white border border-gray-200 rounded font-mono text-xs text-gray-600">
                {tech.item}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-12 mb-4 text-gray-900 text-left">Project Overview</h2>
            
          <div 
            className="prose prose-lg prose-gray max-w-none text-left prose-a:text-blue-800 hover:prose-a:text-blue-600 prose-headings:text-gray-900 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          

        </div>

        {/* Footer Actions */}
        <footer className="mt-20 pt-12 border-t border-gray-100 flex gap-4">
          {project.category === "Mobile App" || project.view_link && (
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