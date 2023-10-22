import CommitsTimeline from "./components/CommitsTimeline";
import NavBar from "./components/NavBar";
import { Khand } from 'next/font/google'

const khand = Khand({ weight: '500', subsets: ['latin'] })

function Home() {

  return (
    <>
      <NavBar />
      <div className="m-6">
        <h1 className={`${khand.className} text-6xl text-center mb-10 dark:text-white`}>Commits timeline of this proyect</h1>
        <CommitsTimeline />
      </div>
    </>

  )
};

export default Home;