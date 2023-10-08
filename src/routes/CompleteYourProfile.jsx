import Language_bubble from '../components/LanguageBubble';
import FrameworksBubble from '../components/FrameworksBubble';
import LanguagesBubble from '../components/LanguagesBubble';
import { Link } from 'react-router-dom'

function CompleteYourProfile() {
    return (
        <div className="bg-bg-black flex flex-col p-20 fade-animation">
            <h1 className="text-4xl mb-4 text-sexy-green font-bold">
                Who are you?
            </h1>

            <div className="flex flex-col">

                <div className='flex items-center'>
                    <p className="text-xl font-bold text-left text-white-text mr-4">Degrees: </p>
                    <input type="text" className="w-[500px] border-0 bg-transparent border-b border-white-strokes mb-2 p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>
                </div>

                <div className='mt-4 flex items-center'>
                    <p className="text-xl font-bold text-left text-white-text mr-4">About Me: </p>
                    <input type="text" className="w-[500px] border-0 bg-transparent border-b border-white-strokes mb-2 p-2 text-white-text outline-none focus:border-sexy-green transition-all"/>
                </div>

                <div className='mt-6 flex items-baseline flex-wrap w-[1100px]'>
                    <p className="text-xl font-bold text-left text-white-text mr-4">Languages: </p>
                    <LanguagesBubble />
                </div>

                <div className="w-full h-[1px] bg-white-strokes my-8"></div>

                <h1 className='text-4xl mb-3 text-sexy-green font-bold'>For Coders</h1>
                <h2 className="mb-2 font-bold text-2xl text-sexy-green">
                    Languages
                </h2>
                <div className="w-full flex flex-wrap h-auto">
                    <Language_bubble />
                </div>

                <h2 className="mt-8 mb-2 font-bold text-2xl text-sexy-green">
                    Frameworks
                </h2>
                <div className="w-full flex flex-wrap h-auto">
                    <FrameworksBubble />
                </div>

                <Link to="/Home">
                    <div className="cursor-pointer bg-sexy-green p-4 w-full flex items-center justify-center font-bold: rounded-[5px] text-[#CCC] transition-all hover:bg-[#386e48] font-bold mt-8">
                        Submit
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CompleteYourProfile;
