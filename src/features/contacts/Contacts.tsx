import { easeIn, motion } from 'framer-motion';
import React from 'react';

export const Contacts: React.FC = () => {
  
  return (
    <section id="contact" className="py-12 px-4 md:px-16 max-w-6xl mx-auto ">
      
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

        {/* Left Side: Call to Action */}
        <div className="relative z-10 max-w-lg">
          <motion.h2 
            initial={{opacity : 0, x : -100}} 
            whileInView={{opacity: 1, x : 0}}
            transition={{duration:0.5, ease:easeIn}}
            viewport={{ once: true, margin: "-100px" }}  
            className="text-3xl font-extrabold mb-4 tracking-tight text-gray-900">
            Initiate Connection
          </motion.h2>
          <div className="flex gap-1 mb-6">
            <div className="w-12 h-1.5 bg-red-800 rounded"></div>
            <div className="w-4 h-1.5 bg-gray-900 rounded"></div>
          </div>
          <motion.p initial={{opacity : 0, x : -100}} 
            whileInView={{opacity: 1, x : 0}}
            transition={{duration:0.5, ease:easeIn, delay:0.2}}
            viewport={{ once: true, margin: "-100px" }}  className="text-gray-600 leading-relaxed font-medium mb-8">
            Whether you are looking to discuss website development, API integration, AI training, or data evaluation, my inbox is open. I am currently based in Kathmandu but operate globally.
          </motion.p>
          
          <motion.a 
            initial={{opacity : 0, x : -100}} 
            whileInView={{opacity: 1, x : 0}}
            transition={{duration:0.5, ease:easeIn, delay:0.3}}
            viewport={{ once: true, margin: "-100px" }}
            href="mailto:ritikshrestha94@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-red-800 transition-colors shadow-md"
          >
            <span>Send Email</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>

        {/* Right Side: Direct Links */}
        <div className="relative z-10 flex flex-col gap-6 w-full md:w-auto">
          
          <motion.div initial={{opacity : 0, x : 100}} 
            whileInView={{opacity: 1, x : 0}}
            transition={{duration:0.5, ease:easeIn, delay:0.2}}
            viewport={{ once: true, margin: "-100px" }} className="p-6 border border-gray-100 bg-gray-50 rounded-xl hover:border-gray-300 transition-colors">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Professional Network</p>
            <a href="https://linkedin.com/in/ritik-shrestha-5617531b1/" className="font-mono text-gray-900 hover:text-red-800 transition-colors font-bold md:text-lg text-sm">
              linkedin.com/in/whyme-duh
            </a>
          </motion.div>

          <motion.div initial={{opacity : 0, x : 100}} 
            whileInView={{opacity: 1, x : 0}}
            transition={{duration:0.5, ease:easeIn, delay:0.3}}
            viewport={{ once: true, margin: "-100px" }} className="p-6 border border-gray-100 bg-gray-50 rounded-xl hover:border-gray-300 transition-colors">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Code Repository</p>
            <a href="https://github.com/whyme-duh" className="font-mono text-gray-900 hover:text-red-800 transition-colors font-bold md:text-lg text-sm">
              github.com/whyme-duh
            </a>
          </motion.div>

        </div>

      </div>
      
      {/* Simple Footer */}
      <div className="mt-24 text-center border-t border-gray-200 pt-8">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
          Engineered by Ritik Lal Shrestha &copy; {new Date().getFullYear()}
        </p>
      </div>

    </section>
  );
};