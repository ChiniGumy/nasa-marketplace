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
                <div className="flex justify-between h-[300px] ">
                    <div className="w-[32%] rounded-[5px] flex flex-col items-center justify-center border border-white-strokes">
                        <h1 className="text-sexy-green font-bold text-2xl">Contributions</h1>
                        <span className="text-white-text font-bold text-xl">234</span>
                    </div>
                    <div className="w-[31%] rounded-[5px] flex flex-col items-center justify-center border border-white-strokes">
                        <h1 className="text-sexy-green font-bold text-2xl">Projects</h1>
                        <span className="text-white-text font-bold text-xl">12</span>
                    </div>
                    <div className="w-[32%] rounded-[5px] flex flex-col items-center justify-center border border-white-strokes">
                        <h1 className="text-sexy-green font-bold text-2xl">Contributions</h1>
                        <span className="text-white-text font-bold text-xl">234</span>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-bold mt-4 text-2xl text-sexy-green">Skills</h2>
                    <p className="text-white-text oufghweruiogheriugrhe">Aca iria lo que esta en figma</p>

                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Profile