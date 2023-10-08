import { Link } from 'react-router-dom'

function ConfirmationEmail() {
    // 7355608 codigo de confirmacion

    return (
        <div className="bg-bg-black flex mt-24 flex-col items-center justify-center p-20 fade-animation">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl mb-4 text-sexy-green font-bold">
                    We are almost done!
                </h1>
                <p className="text-white-text text-xl">
                    We sent a code to dsebastiansr24@gmail.com to confirm your
                    account.
                </p>
                <input
                    type="number"
                    className="mt-8 p-2 outline-none border-b text-white-text border-b-white-strokes [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center transition-all focus:border-b-sexy-green text-4xl tracking-widest"
                />
                <Link to='/complete-your-profile' className='w-full flex items-center justify-center'>
                    <div className="cursor-pointer bg-sexy-green mt-12 p-4 w-[70%] flex items-center justify-center font-bold: rounded-[5px] text-[#CCC] transition-all hover:bg-[#386e48]">Confirm</div>
                </Link>
            </div>
        </div>
    );
}

export default ConfirmationEmail;
