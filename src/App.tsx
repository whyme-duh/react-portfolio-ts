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
import {Routes, Route, Link} from 'react-router-dom';
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
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfbf7]">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-500 mb-8">This page doesn't exist.</p>
                <Link to="/" className="px-6 py-3 bg-gray-900 text-white rounded font-bold hover:bg-blue-800 transition-colors">
                  Return Home
                </Link>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App;