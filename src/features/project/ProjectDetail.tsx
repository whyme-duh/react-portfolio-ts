import React, { useEffect } from 'react';

interface Project {
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

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  
  // Ensure we scroll to top when a project is selected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf7] py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- Navigation Header --- */}
        <header className="flex items-center justify-between mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-500 hover:text-blue-800 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Audit Dashboard
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-400">ID: PROJ-00{project.id}</span>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${
              project.status === 'Deployed' 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                : 'bg-amber-50 text-amber-700 border-amber-100'
            }`}>
              {project.status}
            </span>
          </div>
        </header>

        {/* --- Primary Project Information --- */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-10 max-w-3xl">
              {project.brief_content}
            </p>

            {/* --- Technical Impact Grid --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            
            </div>

            <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-8">
              {project.view_link && (
                <a href={project.view_link} target="_blank" rel="noreferrer" className="bg-blue-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg shadow-blue-800/20">
                  Access Live System
                </a>
              )}
              {project.source_code && (
                <a href={project.source_code} target="_blank" rel="noreferrer" className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Inspect Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* --- Secondary Analysis Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Architecture Visualization (Pure CSS/Tailwind) */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
              System Architecture Matrix
            </h3>
            
            <div className="relative h-64 w-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
               {/* Visual decorative elements to represent structure without SVGs */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)' }}></div>
               
               <div className="flex items-center gap-8 z-10">
                  <div className="w-24 h-24 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-blue-800">FRONTEND</span>
                    <div className="w-8 h-1 bg-blue-100 mt-2 rounded"></div>
                  </div>
                  <div className="w-12 h-0.5 bg-slate-300 relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <div className="w-32 h-32 bg-slate-900 rounded-xl shadow-xl flex flex-col items-center justify-center text-white">
                    <span className="text-[10px] font-mono font-bold">API / LOGIC</span>
                    <div className="w-12 h-1 bg-slate-700 mt-2 rounded"></div>
                    <div className="w-10 h-1 bg-slate-700 mt-1 rounded"></div>
                  </div>
                  <div className="w-12 h-0.5 bg-slate-300 relative">
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <div className="w-24 h-24 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-slate-400">DATA</span>
                    <div className="w-8 h-8 border-2 border-slate-100 rounded-full mt-2"></div>
                  </div>
               </div>
               
               <span className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                 Component Relationship Diagram
               </span>
            </div>
            
            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
            </p>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Tech Inventory</h3>
            <div className="flex flex-wrap gap-2">
              
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Implementation Notes</h4>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-500">01</span>
                  <span>Integrated Gemini AI for dynamic content synthesis and reasoning.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">02</span>
                  <span>Optimized PostgreSQL query performance using indexed lookups.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">03</span>
                  <span>Automated CI/CD pipeline targeting Railway infrastructure.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};