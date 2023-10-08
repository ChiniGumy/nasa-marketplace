import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <>
            <Navbar />

            <div className="bg-bg-black px-32 py-32 flex flex-col justify-between fade-animation">

                <h1 className="text-sexy-green text-4xl mb-2 font-bold">
                    Blogs
                </h1>

                <Link to='/QuantumFrontier'>
                    <div className="cursor-pointer border border-white-strokes rounded-[10px] p-8 mt-4 relative transition-all duration-[450ms] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#5b5b5b2c]">
                        <h1 className="text-sexy-green text-2xl mb-4 font-bold">
                        Navigating the Quantum Frontier: A Glimpse into the Future
                        </h1>
                        <p className="text-white-text text-xl leading-8">
                            In the fast-evolving realm of quantum physics, the boundaries of what&ampos;s possible are constantly shifting. As researchers push the limits of our understanding, a new era of technology and discovery is dawning. Join me on a journey into the intriguing world of quantum mechanics, where the rules of classical physics no longer apply.
                        </p>
                        <p className="text-[#7d7e80] italic mt-8">
                            Dr. Evelyn Chang, Quantum Physicist and Researcher
                        </p>
                    </div>
                </Link>

                <div className="cursor-pointer border border-white-strokes rounded-[10px] p-8 mt-4 relative transition-all duration-[450ms] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#5b5b5b2c]">
                    <h1 className="text-sexy-green text-2xl mb-4 font-bold">
                    Sustainable Tech: Pioneering a Greener Tomorrow                    </h1>
                    <p className="text-white-text text-xl leading-8">
                    In an era defined by environmental challenges, the marriage of technology and sustainability has emerged as a beacon of hope. As we navigate a rapidly changing climate, it's imperative that we harness the power of innovation to forge a path towards a more sustainable future.</p>
                    <p className="text-[#7d7e80] italic mt-8">
                        Sarah Mitchell, Environmental Scientist and Tech Innovator
                    </p>
                </div>

                <div className="cursor-pointer border border-white-strokes rounded-[10px] p-8 mt-4 relative transition-all duration-[450ms] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#5b5b5b2c]">
                    <h1 className="text-sexy-green text-2xl mb-4 font-bold">
                    AI in Healthcare: Transforming the Patient Experience                </h1>
                    <p className="text-white-text text-xl leading-8">
                    In the ever-evolving landscape of healthcare, artificial intelligence (AI) is poised to revolutionize the way we diagnose, treat, and care for patients. As a medical technologist deeply immersed in the intersection of healthcare and AI, I've witnessed firsthand the transformative potential of this groundbreaking technology.</p>
                    <p className="text-[#7d7e80] italic mt-8">
                        Dr. Michael Roberts, Medical Technologist
                    </p>
                </div>


            </div>
        </>
    );
}

export default Blogs;