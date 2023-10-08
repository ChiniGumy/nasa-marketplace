import SearchBar from "../components/SearchBar"

function Home() {
  return (
    <div className="bg-bg-black px-32 py-32 flex justify-between">
        <div className="flex flex-col w-[68%]">

            <div className="flex flex-col">
                <h1 className="text-sexy-green text-4xl mb-4 font-bold">Welcome Back!</h1>
                <SearchBar />
            </div>

            <div className="border border-white-strokes rounded-[10px] p-4 mt-6 relative">
                <h1 className="text-sexy-green text-2xl mb-4 font-bold">Sentiment Analysis for Social Media Data</h1>
                <p className="text-white-text text-xl leading-8">This project aims to develop a sentiment analysis system that can automatically classify social media posts or comments into categories such as positive, negative, or neutral. It involves utilizing natural language processing techniques and machine learning algorithms to train a model on labeled data, enabling it to accurately determine the sentiment behind user-generated content.</p>
                <div className="flex justify-between items-center">
                    <p className="text-[#7d7e80] italic mt-8">Posted 7th, October - Article</p>
                    <div className="cursor-pointer bg-sexy-green px-4 py-2 w-fit rounded-[5px] text-[#CCC] transition-all hover:bg-[#386e48]">See more</div>
                </div>
            </div>

            <div className="border border-white-strokes rounded-[10px] p-4 mt-6 relative">
                <h1 className="text-sexy-green text-2xl mb-4 font-bold">GreenScape - A Collaborative Open-Source Ecosystem Monitoring Platform</h1>
                <p className="text-white-text text-xl leading-8">GreenScape is an ambitious open-source project aimed at revolutionizing our understanding of ecosystems and their response to environmental changes. We&apos;re seeking passionate individuals to join our diverse team of scientists, developers, and environmental enthusiasts in this groundbreaking endeavor. <br /><br />
                
                The goal of GreenScape is to create a comprehensive platform that combines remote sensing technology, data analytics, and machine learning algorithms to monitor and analyze various aspects of ecosystems. This includes tracking biodiversity, vegetation health, climate patterns, and human impact on natural habitats.</p>
                <div className="flex justify-between items-center">
                    <p className="text-[#7d7e80] italic mt-8">Posted 7th, October - Project</p>
                    <div className="cursor-pointer bg-sexy-green px-4 py-2 w-fit rounded-[5px] text-[#CCC] transition-all hover:bg-[#386e48]">See more</div>
                </div>
            </div>
        </div>

        <div className="w-[28%]">
            <div>
                <h2 className="text-2xl mb-4 text-sexy-green font-bold">People you might know</h2>
                <div className="mb-4 border border-white-strokes p-3 rounded-[10px] flex items-center justify-between">
                    <div className="">
                        <h3 className="text-xl font-bold text-white-text ">Joseph Mazzini</h3>
                        <p className="text-[#7d7e80] italic">Chemist Biologist</p>
                    </div>
                    <img src="Mazzini.jpg" className="rounded-full w-16 h-16" alt="" />
                </div>
                <div className="mb-4 border border-white-strokes p-3 rounded-[10px] flex items-center justify-between">
                    <div className="">
                        <h3 className="text-xl font-bold text-white-text ">Liam Johnson</h3>
                        <p className="text-[#7d7e80] italic">Mechatronics Engineer</p>
                    </div>
                    <img src="Liam.jpg" className="rounded-full w-16 h-16 object-cover" alt="" />
                </div>
                <div className="border border-white-strokes p-3 rounded-[10px] flex items-center justify-between">
                    <div className="">
                        <h3 className="text-xl font-bold text-white-text ">Ryan Lee</h3>
                        <p className="text-[#7d7e80] italic">Software Engineer</p>
                    </div>
                    <img src="Ryan.jpg" className="rounded-full w-16 h-16 object-cover" alt="" />
                </div>
            </div>
            
            <div className="w-full h-[1px] bg-white-strokes mt-7 mb-5"></div>
            
            <div className="">
                <h2 className="text-2xl mb-4 text-sexy-green font-bold">Communities</h2>
                <div className="border border-white-strokes p-3 rounded-[10px] flex items-center justify-between">
                    <div className="">
                        <h3 className="mb-1 text-xl font-bold text-white-text ">Coders 4 Life</h3>
                        <p className="text-[#97979b] italic">Are you a coding enthusiast, eager to level up your skills and connect with like-minded individuals? Look no further! Code 4 Life is the ultimate hub for aspiring developers, seasoned programmers, and tech aficionados.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home