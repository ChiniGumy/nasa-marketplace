import Language_bubble from "../components/Language_bubble"
import Frameworks_bubble from "../components/Frameworks_bubble"

function CompleteYourProfile() {
  return (
    <div className="bg-bg-black flex flex-col p-20">
        <h1 className="text-4xl mb-4 text-sexy-green font-bold">What Do You Know?</h1>

        <div className="flex flex-col">

            <h2 className="mb-2 font-bold text-2xl text-sexy-green">Languages</h2>
            <div className="w-full flex flex-wrap h-auto">
                <Language_bubble />
            </div>

            <h2 className="mt-4 mb-2 font-bold text-2xl text-sexy-green">Frameworks</h2>
            <div className="w-full flex flex-wrap h-auto">
                <Frameworks_bubble />
            </div>

            <div className="bg-sexy-green w-full p-4 rounded-[5px] text-[#CCC] flex items-center justify-center font-bold mt-12">Next</div>
        </div>

    </div>
  )
}

export default CompleteYourProfile