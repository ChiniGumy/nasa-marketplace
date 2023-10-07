function Register() {
  return (
    <div className="bg-bg-black h-screen flex items-center justify-center p-20">

        <div className="flex flex-col">

            <h1 className="text-sexy-green text-center text-3xl font-bold">REGISTER</h1>

            <div className="">
                <div className="flex mb-4">
                    <p className="text-xl text-white-text mr-4">Name</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2" />
                </div>
                <div className="flex mb-4">
                    <p className="text-xl text-white-text mr-4">Last Name</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2" />
                </div>
                <div className="flex mb-4">
                    <p className="text-xl text-white-text mr-4">E-mail</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2" />
                </div>
                <div className="flex mb-4">
                    <p className="text-xl text-white-text mr-4">Nickname</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2" />
                </div>
                <div className="flex mb-4">
                    <p className="text-xl text-white-text mr-4">Password</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2" />
                </div>
                <div className="flex mb-8">
                    <p className="text-xl text-white-text mr-4">Confirm Password</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2" />
                </div>
                <button className="bg-sexy-green w-full p-2 rounded-[5px] text-[#CCC]">Register</button>
            </div>

            <div className="mt-6 flex items-center">
                <div className="w-full bg-white-strokes h-[1px]"></div>
                <span className="text-white-text bg-bg-black px-4">or</span>
                <div className="w-full bg-white-strokes h-[1px]"></div>
            </div>

            <div>
                <div className="w-full border flex items-center justify-center p-4 border-blue-linkedin my-4 text-blue-linkedin rounded-[5px]">Linkedin</div>
                <div className="w-full border flex items-center justify-center p-4 border-red-google my-4 text-red-google rounded-[5px]">Google</div>
                <div className="w-full border flex items-center justify-center p-4 border-green-orcid my-4 text-green-orcid rounded-[5px]">ORCID</div>
            </div>

        </div>

        
    </div>
  )
}

export default Register