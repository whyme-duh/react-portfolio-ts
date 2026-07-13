import './App.css'
import {Home} from './features/home/Home';
import {About} from './features/about/About';
import {Projects} from './features/project/Projects';
import {ProjectDetail} from './features/project/ProjectDetail';
import {ProjectList} from './features/project/ProjectList';
import {Certifications} from './features/certificates/Certificates';
import {Experience} from './features/experience/Experience';
import {Contacts} from './features/contacts/Contacts';
import {Navbar} from './components/Navbar';
import {NavbarWithLinks} from './components/NavbarWithLinks';
import {Routes, Route} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { PageTransition } from './components/PageTransition';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <main>
          <Routes>
            <Route path ="/" element={
              <>
              <Navbar/>
              <Home />
              <About/>
              <Experience/>
              <Projects/>
              <Certifications/>
              <Contacts/>
              </>
            } />
            <Route element={
              <>
                <NavbarWithLinks />
                <Outlet /> 
              </>
            }>
            <Route path="/project/:slug" element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
              
              } />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/about" element={
              <PageTransition><About /></PageTransition>
              } />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contacts />} />
            </Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App;