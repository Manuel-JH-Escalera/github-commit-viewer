import CommitsTimeline from "./components/CommitsTimeline";
import NavBar from "./components/NavBar";
import { Khand } from 'next/font/google'
import Canvas from "./components/Canvas";

const khand = Khand({ weight: '500', subsets: ['latin'] })

function Home() {

  return (
    <>
      <NavBar />
      <div className="my-6">
        <h1 className={`${khand.className} text-6xl text-center mb-5 mx-6 dark:text-white`}>Commits timeline of this proyect</h1>
        <Canvas />
        <CommitsTimeline />
      </div>
    </>

  )
};

export default Home;