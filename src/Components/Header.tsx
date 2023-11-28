import { FaBraille } from "react-icons/fa6";


const Header = () => {
    return (
        <nav className="flex w-full text-xs items-center justify-end px-4 gap-5 py-3 h-14">
            <a className="hover:underline" href="#">Gmail</a>
            <a className="hover:underline" href="#">Image</a>
            <FaBraille className=" text-xl" />
            <img src="/assets/scor32k.png" alt="me" className="rounded-full" />
        </nav>
    )
}

export default Header;