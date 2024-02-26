import LocomotiveScroll from 'locomotive-scroll';

import Home from "./MyComponents/Home"
import Navbar from "./MyComponents/Navbar"
import Footer from './MyComponents/Footer';

function App() {
  /* @ts-ignore */
  const locomotiveScroll = new LocomotiveScroll();

  return (
      <div className="w-full h-full">
        <Navbar />
        <Home />
        <Footer />
      </div>
  )
}

export default App