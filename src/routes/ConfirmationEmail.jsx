function ConfirmationEmail() {
    // 7355608 codigo de confirmacion

    return (
        <div className="bg-bg-black flex mt-24 flex-col items-center justify-center p-20">
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
                <div className="mt-8 bg-sexy-green w-full p-4 flex items-center justify-center rounded-[5px] text-[#CCC]">
                    Confirm
                </div>
            </div>
        </div>
    );
}

export default ConfirmationEmail;
