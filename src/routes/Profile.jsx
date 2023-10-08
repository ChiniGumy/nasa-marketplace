import Language_bubble from "../components/Frameworks_bubble"

function Profile() {
  return (
    <div className="bg-bg-black flex flex-col p-20">
        <h1 className="text-4xl mb-4 text-sexy-green font-bold">Profile</h1>

        <div className="w-full flex justify-between">

            <div className="flex flex-col w-[30%]">
                <img className="mr-4 h-[400px] w-[400px] object-cover rounded-[5px]" src="https://monitorlatino.com/wp-content/uploads/2022/03/Jhay-Cortez.jpg" alt="" />
                <div className="flex flex-col">
                    <p className="mb-4 mt-4 text-white-text text-3xl">@Dsebastiansr</p>
                    <p className="mb-4 text-white-text text-xl">👤 David Sanchez Romero</p>
                    <p className="mb-4 text-white-text text-xl">📜 Software Engineer</p>
                    <p className="mb-4 text-white-text text-xl">🌎 Ecuador, Guayaquil</p>
                </div>
            </div>

            <div className="flex flex-col w-[70%] border border-white-strokes rounded-[5px] p-8">
                <div className="flex justify-between h-[300px] mb-2">
                    <div className="w-[32%] rounded-[5px] flex flex-col items-center justify-center border border-white-strokes">
                        <h1 className="text-sexy-green font-bold text-4xl">Contributions</h1>
                        <span className="mt-2 text-white-text font-bold text-4xl">234</span>
                    </div>
                    <div className="w-[31%] rounded-[5px] flex flex-col items-center justify-center border border-white-strokes">
                        <h1 className="text-sexy-green font-bold text-4xl">Projects</h1>
                        <span className="mt-2 text-white-text font-bold text-4xl">12</span>
                    </div>
                    <div className="w-[32%] rounded-[5px] flex flex-col items-center justify-center border border-white-strokes">
                        <h1 className="text-sexy-green font-bold text-4xl">Contributions</h1>
                        <span className="mt-2 text-white-text font-bold text-4xl">234</span>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white-strokes my-4"></div>
                <div>
                    <h2 className="mb-2 font-bold text-2xl text-sexy-green">About Me</h2>
                    <p className="text-white-text text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aperiam itaque soluta voluptas fuga fugit provident aspernatur magnam inventore cum dolore atque a consequuntur architecto est amet quisquam adipisci accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iusto, excepturi officia aperiam sapiente perferendis placeat natus ea explicabo blanditiis nobis! Illum corporis nobis odit doloremque! Distinctio nulla perferendis mollitia!</p>
                    <div className="flex mt-4">
                        <h2 className="mr-2 font-bold text-xl text-sexy-green">Languages:</h2>
                        <div className="text-white-text border border-white-text w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]">Spanish</div>
                        <div className="text-white-text border border-white-text w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]">English</div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white-strokes my-4"></div>
                <div className="flex flex-col">
                    <h2 className="mb-2 font-bold text-2xl text-sexy-green">Skills</h2>
                    <div className="w-full flex flex-wrap h-auto">
                        <Language_bubble/>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white-strokes my-4"></div>
                <div className="flex flex-col">
                    <h2 className="mb-2 font-bold text-2xl text-sexy-green">Projects worked</h2>
                    <ul className="text-white-text text-lg leading-9">
                        <li><b>QuantumLeap:</b> A project exploring quantum computing algorithms and applications.</li>
                        <li><b>BioGenius:</b> A genetic research initiative focused on understanding and manipulating DNA sequences.</li>
                        <li><b>NeuralNetX:</b> An artificial intelligence project aiming to develop advanced neural network architectures.</li>
                        <li><b>SpaceRover:</b> A robotic exploration project designed for extraterrestrial environments.</li>
                        <li><b>CleanTechRevolution:</b> A sustainable energy initiative focused on renewable technologies and solutions.</li>
                        <li><b>CodeCrafters:</b> A coding platform for collaborative software development and learning.</li>
                        <li><b>NanoMedTech:</b> A project at the intersection of nanotechnology and medicine, developing innovative medical treatments.</li>
                        <li><b>EcoDataHub:</b> A data-driven project addressing environmental issues and promoting conservation efforts.</li>
                    </ul>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Profile