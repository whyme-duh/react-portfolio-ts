import { useState } from 'react'
import './App.css'
import {Home} from './features/home/Home';
import {About} from './features/about/About';
import {Projects} from './features/project/Projects';
import {ProjectDetail} from './features/project/ProjectDetail';
import {Certifications} from './features/certificates/Certificates';
import {Experience} from './features/experience/Experience';
import {Contacts} from './features/contacts/Contacts';
import {Navbar} from './components/Navbar';


function App() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar/>
        <main>
          {selectedProject ? (
            
            /* If a project is selected, show ONLY the detail page */
            <ProjectDetail 
              project={selectedProject} 
              // Pass a function to clear the state when the user clicks "Back"
              onBack={() => setSelectedProject(null)} 
            />
            
          ) : (
            <>
            <Home />
          <About/>
          <Projects onSelectProject={setSelectedProject}/>
          <Experience/>
          <Certifications/>
          <Contacts/>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default App
