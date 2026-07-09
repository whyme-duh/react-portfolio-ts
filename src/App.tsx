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
            <Route path="/project/:slug" element={
              <>
              <NavbarWithLinks/>
              <ProjectDetail/>
              </>
              }/>
            <Route path= "/projects/" element={
              <>
              <NavbarWithLinks/>
              <ProjectList/>
              </>
              }/>
              <Route path= "/experiences/" element={
              <>
              <NavbarWithLinks/>
              <Experience/>
              </>
              }/>
              <Route path= "/about/" element={
              <>
              <NavbarWithLinks/>
              <About/>
              </>
              }/>
              <Route path= "/contact/" element={
              <>
              <NavbarWithLinks/>
              <Contacts/>
              </>
              }/>
          </Routes>
          
        </main>
      </div>
    </>
  )
}

export default App
