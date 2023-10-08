import Navbar from '../components/Navbar';

function OpenMediGen() {
    return (
        <>
            <Navbar />

            <div className="bg-bg-black px-32 py-32 flex justify-between fade-animation">
                <div className='w-[68%]'>
                    <h1 className="text-sexy-green text-3xl mb-4 font-bold">
                        {' '}
                        OpenMediGen - A Collaborative Medical Genetics Research
                        Initiative{' '}
                    </h1>

                    <h2 className="text-sexy-green text-2xl mb-2 font-bold">
                        Description
                    </h2>
                    <p className="text-white-text text-xl leading-8">
                        OpenMediGen is a pioneering open-source project focused
                        on advancing the field of medical genetics and
                        personalized medicine. We invite dedicated professionals
                        and enthusiasts to join us in this mission to drive
                        innovation and improve healthcare outcomes for
                        individuals around the world.
                    </p>

                    <h2 className="mt-12 text-sexy-green text-2xl mb-2 font-bold">
                        Project Overview
                    </h2>
                    <p className="text-white-text text-xl leading-8">
                        OpenMediGen aims to create a comprehensive platform that
                        integrates genomic data, clinical information, and
                        cutting-edge analysis tools. This platform will
                        facilitate research in genetic disorders, biomarker
                        discovery, and the development of tailored treatment
                        strategies.
                    </p>

                    <h2 className="mt-12 text-sexy-green text-2xl mb-2 font-bold">
                        Roles and Responsibilities
                    </h2>
                    <ul className="text-white-text text-xl leading-10">
                        <li>
                            <b>Bioinformatics Experts:</b> Contribute to the
                            development of data pipelines, genomic data
                            processing, and the implementation of analytical
                            algorithms.
                        </li>
                        <li>
                            <b>Medical Professionals:</b> Provide clinical
                            expertise to guide research focus, validate
                            findings, and ensure practical applicability of
                            research outcomes.
                        </li>
                        <li>
                            <b>Software Engineers:</b> Develop user-friendly
                            interfaces and ensure the seamless integration of
                            data from various sources.
                        </li>
                        <li>
                            <b>Genetic Counselors:</b> Assist in interpreting
                            genetic information, providing insights into
                            potential clinical implications, and supporting
                            communication with patients.
                        </li>
                    </ul>

                    <h2 className="mt-12 text-sexy-green text-2xl mb-2 font-bold">
                        Why join OpenMediGen?
                    </h2>
                    <p className="text-white-text text-xl leading-8">
                        By becoming a part of OpenMediGen, you&apos;ll be at the
                        forefront of cutting-edge research that has the
                        potential to revolutionize healthcare. Your
                        contributions will directly impact the understanding and
                        treatment of genetic conditions, ultimately leading to
                        improved patient care and outcomes. Join us in this
                        collaborative effort to shape the future of medical
                        genetics and make a lasting difference in the lives of
                        individuals and families affected by genetic disorders.
                    </p>
                </div>

                <div className='w-[28%] mb-4 border border-white-strokes p-6 rounded-[10px] flex flex-col h-fit'>
                    <h2 className='text-sexy-green text-2xl mb-4 font-bold'>Project Info</h2>
                    <p className='mb-3 text-xl text-white-text'><b>Foundation date:</b> 03-23-2022</p>
                    <p className='mb-3 text-xl text-white-text'><b>Organization:</b> HealthGenix</p>
                    <p className='text-xl text-white-text'><b>Members:</b> 21</p>
                    <div className="w-full h-[1px] bg-white-strokes my-4"></div>
                    <p className='leading-8 text-xl text-white-text'><b>Topics:</b> Genomic Data Analysis, Personalized Medicine, Medical Genetics, Biomarker Discovery, Clinical Genomics, Bioinformatics, Genetic Disorders, Treatment Strategies, Healthcare Innovation, Genetic Counseling, Patient Care, Research Collaboration, Open Source Initiative</p>
                    <div className="w-full h-[1px] bg-white-strokes my-4"></div>
                    <p className='leading-8 text-xl text-white-text'><b>Contacts:</b> health-genix@info.com</p>
                    <div className="cursor-pointer bg-sexy-green p-3 w-full flex items-center justify-center font-bold: rounded-[5px] text-[#CCC] transition-all hover:bg-[#386e48] mt-2 font-bold">Request</div>
                </div>
            </div>
        </>
    );
}

export default OpenMediGen;
