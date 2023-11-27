
const Footer = () => {
    return (
        <footer className="bg-[#171717] h-16 fixed bottom-0 w-full">
            <div className="border-b border-white/50 py-2 flex justify-start px-4 h-8" id="">
                <p className="text-sm" id="location">India</p>
            </div>
            <div className="flex justify-between items-center text-sm px-4 h-8">
                <div className="flex gap-5 items-center justify-center">
                    <a href="#">About</a>
                    <a href="#">Advertising</a>
                    <a href="#">Business</a>
                    <a href="#">How Search Works</a>
                </div>
                <div className="flex gap-5 items-center justify-center">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Settings</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;