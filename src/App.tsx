import { useState } from 'react'
import './App.css'
import {Home} from './features/home/Home';
import {About} from './features/about/About';
import {Projects} from './features/project/Projects';
import {Certifications} from './features/certificates/Certificates';
import {Contacts} from './features/contacts/Contacts';
import {Navbar} from './components/Navbar';


function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar/>
        <main>
          <Home />
          <About/>
          <Projects/>
          <Certifications/>
          <Contacts/>
        </main>
      </div>
    </>
  )
}

export default App
