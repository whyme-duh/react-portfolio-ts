import React from 'react';
import { useCertificate } from './hooks/useCertificate';





export const Certifications: React.FC = () => {
    const {certification, loading, error } = useCertificate();
    if (loading) {
        return (
        <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-sky-50/50 flex justify-center">
            <div className="font-mono text-gray-500 animate-pulse">Loading System Data...</div>
        </section>
        );
    }

    if (error || !certification) {
        return (
        <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-sky-50/50 flex justify-center">
            <div className="font-mono text-red-500">{error || "No data available."}</div>
        </section>
        );
    }
    if (!certification || certification.length === 0) return null;
    return (
        <section id="certifications" className="py-24 px-8 md:px-16 max-w-6xl mx-auto bg-[#fdfbf7]">
        
        {/* Section Header */}
        <div className="mb-12">
            <h2 className="text-3xl font-extrabold mb-3 tracking-tight text-gray-900">
            Verified Credentials
            </h2>
            <div className="flex gap-1">
            <div className="w-12 h-1.5 bg-red-800 rounded"></div>
            <div className="w-4 h-1.5 bg-gray-900 rounded"></div>
            </div>
        </div>

        {/* Credentials Ledger Layout */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            
            {/* Ledger Header (Hidden on small screens for cleaner mobile UI) */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <div className="col-span-4">Credential </div>
            <div className="col-span-2">Issuer</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-3 text-right">Associated Skills</div>
            </div>

            {/* Ledger Rows */}
            <div className="divide-y divide-gray-100">
            {certification.map((cred) => (
                <div 
                    key={cred.id} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-gray-50 transition-colors items-center group"
                    >
                
                    {/* Title & Issuer (Spans 5 cols on desktop) */}
                    <div className="md:col-span-4">
                        <a href={cred.credential_url}>
                            <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-800 transition-colors">
                        {cred.name}
                        </h3>
                        </a>
                        
                    </div>

                    {/* Category */}
                    <div className="md:col-span-2">
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-800 transition-colors">
                        {cred.issuing_organization}
                        </h3>
                    </div>
                    

                    {/* Date */}
                    <div className="md:col-span-2">
                        <span className="text-xs font-mono text-gray-600">
                        {cred.issue_date}
                        </span>
                    </div>

                    
                    <div className="md:col-span-4">
                        <div className="flex flex-wrap gap-1.5">
                        {cred.skills?.map((skill) => (
                            <span 
                            key={skill.id} 
                            className="inline-block px-2 py-0.5 text-[10px] font-mono text-gray-600 bg-white border border-gray-200 rounded"
                            >
                            {skill.item}
                            </span>
                        ))}
                        </div>
                    </div>

                </div>
            ))}
            </div>

        </div>

        </section>
  );
};