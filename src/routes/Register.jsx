import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="bg-bg-black h-screen flex items-center justify-center">

        <div className="flex flex-col">

            <h1 className="text-sexy-green text-center text-4xl mb-6 font-bold">REGISTER</h1>

            <div className="w-[520px]">
                <div className="flex mb-4 justify-between">
                    <p className="text-xl w-[25%] text-left text-white-text mr-4">Name</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2 w-[75%] p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>
                </div>
                <div className="flex mb-4 justify-between">
                    <p className="text-xl text-white-text w-[25%] mr-4">Last Name</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2 w-[75%] p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>
                </div>
                <div className="flex mb-4 justify-between">
                    <p className="text-xl text-white-text text-left mr-4 w-[25%]">E-mail</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2 w-[75%] p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>
                </div>
                <div className="flex mb-4 justify-between">
                    <p className="text-xl text-white-text w-[25%] text-left mr-4">Nickname</p>
                    <input type="text" className="border-0 bg-transparent border-b border-white-strokes mb-2 w-[75%] p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>                </div>
                <div className="flex mb-4 justify-between">
                    <p className="text-xl text-white-text w-[25%] text-left mr-4">Password</p>
                    <input type="password" className="border-0 bg-transparent border-b border-white-strokes mb-2 w-[75%] p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>                </div>
                <div className="flex mb-8">
                    <p className="text-xl text-white-text w-[25%] text-left mr-4">Confirm Password</p>
                    <input type="password" className="border-0 bg-transparent border-b border-white-strokes mb-2 w-[75%] p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>                </div>
                
                <Link to='/email-confirmation'>
                    <div className="cursor-pointer bg-sexy-green p-4 w-full flex items-center justify-center font-bold: rounded-[5px] text-[#CCC] transition-all hover:bg-[#386e48]">Register</div>
                </Link>
                



            </div>

            <div className="mt-6 flex items-center">
                <div className="w-full bg-white-strokes h-[1px]"></div>
                <span className="text-white-text bg-bg-black px-4">or</span>
                <div className="w-full bg-white-strokes h-[1px]"></div>
            </div>

            <div>
                <div className="cursor-pointer w-full border flex items-center justify-center p-4 border-blue-linkedin my-4 text-blue-linkedin rounded-[5px] transition-all hover:border-[#72a4f5]">Linkedin</div>

                <div className="cursor-pointer w-full border flex items-center justify-center p-4 border-red-google my-4 text-red-google rounded-[5px] transition-all hover:border-[#e25757]">Google</div>

                <div className="cursor-pointer w-full border flex items-center justify-center p-4 border-green-orcid my-4 text-green-orcid rounded-[5px] transition-all hover:border-[#5ff79c]">ORCID</div>
            </div>

        </div>

        
    </div>
  )
}

export default Register