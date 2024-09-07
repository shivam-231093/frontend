import { useState } from 'react'
import Homepage from './pages/homepage'
import NavBar from './widgit/navbar'
import About from './pages/about'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Footer from './widgit/Footer'
import  Projects from './pages/projects/projects';
import Classify from './pages/projects/pulsar/classify';
import Service from './pages/service'
// import Discuss from './pages/projects/pulsar/discuss';
import Collection from './pages/projects/pulsar/collection';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NavBar/>
     
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/projects/pulsar/about" element={<About />} />
        <Route path="/projects/pulsar/classify" element={<Classify />} />
        <Route path="/projects/pulsar/collection" element={<Collection />} />
        <Route path="/projects/pulsar/discuss" element={<Discuss />} />
      </Routes> */}
      <Footer/>
    
    </Router>
    </>
  )
}

export default App
