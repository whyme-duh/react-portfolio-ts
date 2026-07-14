import React from 'react';
import { useBio } from './hooks/useBio';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { easeIn, motion } from 'framer-motion';

export const Home: React.FC = () => {

    const {bio, loading, error } = useBio();

    if (loading) {
        return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="font-mono text-gray-500 animate-pulse">Loading Profile...</div>
        </section>
        );
    }

    if (error || !bio) {
        return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="font-mono text-red-500">{error || "No bio data found."}</div>
        </section>
        );
    }

    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 pb-8 md:px-16 gap-12 max-w-6xl mx-auto">
      
            <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                <motion.img 
                    initial={{opacity : 0, x : -100}} 
                    whileInView={{opacity: 1, x : 0}}
                    transition={{duration:0.5, ease:easeIn}}
                    viewport={{ once: true, margin: "-100px" }} 
                src={bio.profile_image || "/placeholder.jpg"}
                alt="Profile" 
                className="w-full h-full object-cover rounded-full shadow-lg"
                />
                <motion.div 
                    initial={{opacity : 0, x : -100}} 
                    whileInView={{opacity: 1, x : 0}}
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{duration:0.5, ease:easeIn, delay:0.1}}
                className="flex justify-center gap-6 mt-6 text-gray-600 font-bold text-sm">
                {bio.linkedin && <a href={bio.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-800 transition-colors"><FaLinkedin size={20} color="#000" className='text-blue-500 hover:text-red-500 transition-colors duration-200' /></a>}
                {bio.github && <a href={bio.github} target="_blank" rel="noreferrer" className="hover:text-red-800 transition-colors"><FaGithub size={20} color="#000" /></a>}
                {bio.instagram && <a href={bio.instagram} target="_blank" rel="noreferrer" className="hover:text-red-800 transition-colors"><FaInstagram size={20} color="#000" /></a>}
                {bio.pinterest && <a href={bio.pinterest} target="_blank" rel="noreferrer" className="hover:text-red-800 transition-colors"><FaPinterest size={20} color="#000" /></a>}
                </motion.div>
            </div>

            <div className="flex flex-col items-center lg:items-start md:items-start md:text-left sm:text-center mt-5">
                <motion.h1 
                    initial={{opacity : 0, x : 200}} 
                    whileInView={{opacity: 1, x : 0}}
                    transition={{duration:0.5, ease:easeIn}}
                    viewport={{ once: true, margin: "-100px" }} 
                    className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 text-center">
                Hi, My name is <span className="md:text-4xl text-black-900 font-bold">Ritik Lal Shrestha</span>
                </motion.h1>
                <motion.h2 
                    initial={{opacity : 0, x : 200}} 
                    whileInView={{opacity: 1, x : 0}}
                    transition={{duration:0.5, ease:easeIn, delay:0.1}}
                    viewport={{ once: true, margin: "-100px" }} 
                className="text-2xl md:text-4xl font-bold text-gray-400 mb-3 lg:mb-5">
                aka. Whyme-duh
                </motion.h2>
                
                <motion.p 
                    initial={{opacity : 0, x : 200}} 
                    viewport={{ once: true, margin: "-100px" }} 
                    whileInView={{opacity: 1, x : 0}}
                    transition={{duration:0.5, ease:easeIn, delay:0.2}}
                className="text-md text-gray-600 mb-8 font-mono">
                I am a Student, Developer and a Senior AI Data Trainer.
                </motion.p>

                <motion.div 
                    initial={{opacity : 0, x : 200}} 
                    viewport={{ once: true, margin: "-100px" }} 
                    whileInView={{opacity: 1, x : 0}}
                    transition={{duration:0.5, ease:easeIn, delay:0.3}}
                className="flex gap-4">
                    
                    <a href={bio.cv_file} download className="lg:px-6 px-4 py-2 border border-gray-300 text-gray-700 rounded text-sm font-bold tracking-wide hover:bg-gray-50 border-blue-800 transition-colors">
                        VIEW MY RESUME
                    </a>
                    <a href="#contact" className="px-6 py-2 border border-gray-300 text-gray-700 rounded text-sm font-bold tracking-wide hover:bg-gray-50 transition-colors">
                        CONTACT ME
                    </a>
                </motion.div>
            </div>
        </section>
  );
}