import React from 'react';
import {Link} from 'react-router-dom';
import { useProjectList } from './hooks/useProjectList';

export const ProjectList:React.FC = () => {
    const {projects, loading, error } = useProjectList();
    return (
        <>
        <section id="projects" className="py-24 px-8 md:px-16 max-w-6xl mx-auto ">
            {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
                <Link 
                key={project.id} 
                to={`/project/${project.slug}`}
                className="group bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:border-red-800 transition-all duration-300 flex flex-col justify-between"
                >
                <div>
                    
                    <div className="flex flex-col justify-between items-center gap-2 mb-4">
                        
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-800 transition-colors">
                            {project.name}
                        </h3>
                        
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {project.brief_content}
                    </p>
                </div>

                <div>
                    {/* Tech Stack Array Mapping */}
                    <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
                    {project.tech_stacks && project.tech_stacks.map((tech) => (
                        <span key={tech.id} className="px-2 py-1 bg-gray-50 border border-gray-200 rounded font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                        {tech.item}
                        </span>
                    ))}
                    </div>

                    <div className="flex justify-between items-center gap-4 border-t border-gray-100 pt-4">
                        <div className="btn-groups flex gap-2">
                            {project.view_link && (
                            <a href={project.view_link} className="text-xs font-bold text-gray-900 hover:text-red-800 uppercase tracking-widest transition-colors">
                            Live Demo
                            </a>
                            )}
                            {project.source_code && (
                                <a href={project.source_code} className="text-xs font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors">
                                Source Code
                                </a>
                            )}
                        </div>
                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${
                                project.status === 'Deployed' ? 'bg-green-50 text-green-700 border-green-200' : 
                                project.status === 'Under Development' ? 'bg-orange-50 text-orange-700 border-orange-200' : 
                                'bg-gray-50 text-gray-600 border-gray-200'
                            }`}>
                                {project.status}
                        </span>
                    
                    </div>
                    
                </div>
                </Link>
            ))}
            </div>
        )}
        
        </section>
        </>
    );
};