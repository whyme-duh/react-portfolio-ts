import React from 'react';
import {useAbout} from './hooks/useAbout';

export const About: React.FC = () => {
  
  const {aboutData, loading, error} = useAbout();
  if (loading) {
      return (
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-sky-50/50 flex justify-center">
          <div className="font-mono text-gray-500 animate-pulse">Loading System Data...</div>
      </section>
      );
  }

  if (error || !aboutData) {
      return (
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-sky-50/50 flex justify-center">
          <div className="font-mono text-red-500">{error || "No data available."}</div>
      </section>
      );
  }
  const backendTech = aboutData?.tech_stack?.filter(tech => tech.category === 'backend')?.sort((a,b) => Number(b.focused) - Number(a.focused)) || [];
  const frontendTech = aboutData?.tech_stack?.filter(tech => tech.category === 'frontend')?.sort((a,b) => Number(b.focused) - Number(a.focused)) || [];
  const dataOpsTech = aboutData?.tech_stack?.filter(tech => tech.category === 'data&ops')?.sort((a,b) => Number(b.focused) - Number(a.focused)) || [];
  const tools = aboutData?.tech_stack?.filter(tech => tech.category === 'tools')?.sort((a,b) => Number(b.focused) - Number(a.focused)) || [];
  return (
  <section id="about" className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-sky-50/50">
    <div className="mb-12">
      <h2 className="text-3xl font-extrabold mb-3 tracking-tight text-gray-900">
        About Me
      </h2>
      <div className="flex gap-1">
        <div className="w-12 h-1.5 bg-blue-800 rounded"></div>
        <div className="w-4 h-1.5 bg-gray-900 rounded"></div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Professional Summary</h3>
        <p className="text-sm text-justify md:text-md text-gray-700 leading-relaxed font-medium">
          {aboutData.about_me_content}
        </p>
      </div>

      <div className="lg:col-span-1 bg-gray-900 text-white rounded-2xl p-8 shadow-sm flex flex-col justify-center relative overflow-hidden">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 relative z-10">My Hobbies</h3>
        
        <ul className="space-y-4 relative z-10 font-mono text-sm">
          {aboutData.hobbies.map((hobby) => (
            <li key={hobby.id} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
              <span className="text-gray-200">{hobby.name}</span>
            </li>
          ))}
          
          {/* Fallback if the database has no hobbies yet */}
          {aboutData.hobbies.length === 0 && (
            <li className="text-gray-500 italic">No pursuits logged.</li>
          )}
        </ul>
      </div>

      <div className="lg:col-span-3 bg-white rounded-2xl p-8 border-t-4 border-t-blue-800 border-l border-r border-b border-gray-100 shadow-sm flex flex-col justify-center">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Tech Arsenal Matrix</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Backend Column */}
          <div>
            <span className="block text-left text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Backend & Infrastructure</span>
            <div className="flex flex-wrap gap-2">
              {backendTech.map((tech) => (
                
                <span key={tech.id} className={`px-3 py-1.5 rounded font-mono text-xs shadow-sm ${tech.focused === true ? 'bg-[#22577a] text-white': 'bg-grey-50 text-black'}`}>
                  {tech.item}
                  {tech.focused}

                </span>
              ))}
              {backendTech.length === 0 && <span className="text-gray-400 italic text-xs">No entries...</span>}
            </div>
          </div>

          {/* Frontend Column */}
          <div>
            <span className="block text-left text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Frontend & UI</span>
            <div className="flex flex-wrap gap-2">
              {frontendTech.map((tech) => (
                <span key={tech.id} className={`px-3 py-1.5 rounded font-mono text-xs shadow-sm ${tech.focused === true ? 'bg-[#38a3a5] text-white': 'bg-grey-50 text-black'}`}>
                  {tech.item}
                </span>
              ))}
              {frontendTech.length === 0 && <span className="text-gray-400 italic text-xs">No entries...</span>}
            </div>
          </div>

          {/* Data & Ops Column */}
          <div>
            <span className="block text-left text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Data & Ops</span>
            <div className="flex flex-wrap gap-2">
              {dataOpsTech.map((tech) => (
                <span key={tech.id} className={`px-3 py-1.5 rounded font-mono text-xs shadow-sm ${tech.focused === true ? 'bg-[#57cc99] text-white': 'bg-grey-50 text-black'}`}>
                  {tech.item}
                </span>
              ))}
              {dataOpsTech.length === 0 && <span className="text-gray-400 italic text-xs">No entries...</span>}
            </div>
          </div>
          {/* Data & Ops Column */}
          <div>
            <span className="block text-left text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Tools</span>
            <div className="flex flex-wrap gap-2">
              {tools.map((tech) => (
                <span key={tech.id} className={`px-3 py-1.5 rounded font-mono text-xs shadow-sm ${tech.focused === true ? 'bg-[#80ed99] text-white': 'bg-grey-50 text-black'}`}>
                  {tech.item}
                </span>
              ))}
              {tools.length === 0 && <span className="text-gray-400 italic text-xs">No entries...</span>}
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  );
};