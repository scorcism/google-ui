import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { FaMicrophone, FaMagnifyingGlass, FaCamera } from "react-icons/fa6";




const Home = () => {

    const langs = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"]

    return (
        <>
            <Header />
            <section className="h-[82vh] w-[100vw]">
                <div className="flex justify-center items-center h-full flex-col gap-5">
                    <img src="/assets/googlelogo.png" alt="" />
                    <div className="flex border border-white/40 justify-start items-center py-1 px-4 rounded-full gap-5 hover:bg-white/10 hover:border-transparent transition duration-200">
                        <FaMagnifyingGlass />
                        <input type="search" className="focus:border-r focus:border-white/40 px-2 outline-none w-[30vw] bg-transparent py-[5px]" />
                        
                        <FaMicrophone className="cursor-pointer" title="Search by voice" />
                        <FaCamera  className="cursor-pointer" title="Search by image"/>
                    </div>
                    <div className="flex justify-around gap-4">
                        <button className="bg-white/10 px-2 py-1 rounded-sm text-xs border border-transparent hover:border-white/40 transition duration-300 ">Google Search</button>
                        <button className="bg-white/10 px-2 py-1 rounded-sm text-xs border border-transparent hover:border-white/40 transition duration-300 ">I'm Feeling Lucky</button>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-xs">Google offered in:
                        </p>
                        <p className="flex gap-2 text-xs text-blue-500">
                            {
                                langs.map(lang => (
                                    <a href="#">{lang}</a>
                                ))
                            }
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;