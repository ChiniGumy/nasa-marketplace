import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <>
            <Navbar />

            <div className="bg-bg-black px-32 py-32 flex flex-col justify-between fade-animation">

                <h1 className="text-sexy-green text-4xl mb-2 font-bold">
                    Projects
                </h1>

                <Link to='/OpenMediGen'>
                    <div className="cursor-pointer border border-white-strokes rounded-[10px] p-8 mt-4 relative transition-all duration-[450ms] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#5b5b5b2c]">
                        <h1 className="text-sexy-green text-2xl mb-4 font-bold">
                            OpenMediGen - A Collaborative Medical Genetics Research Initiative
                        </h1>
                        <p className="text-white-text text-xl leading-8">
                        OpenMediGen is a pioneering open-source project focused on advancing the field of medical genetics and personalized medicine. We invite dedicated professionals and enthusiasts to join us in this mission to drive innovation and improve healthcare outcomes for individuals around the world.

                        <br /><br />

                        OpenMediGen aims to create a comprehensive platform that integrates genomic data, clinical information, and cutting-edge analysis tools. This platform will facilitate research in genetic disorders, biomarker discovery, and the development of tailored treatment strategies.
                        </p>
                    </div>
                </Link>

                <div className="cursor-pointer border border-white-strokes rounded-[10px] p-8 mt-6 relative transition-all duration-[450ms] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#5b5b5b2c]">
                        <h1 className="text-sexy-green text-2xl mb-4 font-bold">
                            CodeForAll: Inclusive Tech Education Initiative
                        </h1>
                        <p className="text-white-text text-xl leading-8">
                        CodeForAll is a forward-thinking open-source project dedicated to democratizing access to technology education. We&apos;re inviting dedicated individuals to join us in creating a diverse and inclusive learning environment where everyone can unlock their potential in the world of coding and computer science.

                        <br /><br />

                        CodeForAll aims to develop a comprehensive online learning platform with a focus on coding fundamentals, web development, and software engineering. The project will provide free resources, interactive tutorials, and community forums to support learners at all levels, from beginners to advanced programmers.
                        </p>
                </div>

                <div className="cursor-pointer border border-white-strokes rounded-[10px] p-8 mt-6 relative transition-all duration-[450ms] hover:scale-[1.01] hover:shadow-lg hover:shadow-[#5b5b5b2c]">
                        <h1 className="text-sexy-green text-2xl mb-4 font-bold">
                        QuantumHealth: Advancing Healthcare through Quantum Computing
                        </h1>
                        <p className="text-white-text text-xl leading-8">
                        QuantumHealth is a groundbreaking open-source initiative aimed at leveraging the power of quantum computing to revolutionize healthcare solutions. We invite dedicated professionals and enthusiasts to join us in this mission to unlock new frontiers in medical research, drug discovery, and personalized treatment strategies.

                        <br /><br />

                        QuantumHealth focuses on developing quantum algorithms and simulations tailored for healthcare applications. This includes tasks like simulating molecular structures for drug development, optimizing treatment plans, and solving complex optimization problems in medical logistics.
                        </p>
                </div>

            </div>
        </>
    );
}

export default Projects;