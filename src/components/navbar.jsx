import { LearnChain } from "./learnChain";
import {Link} from "react-router-dom"


export function Navbar() {
    return(
        <div className="fixed top-0 left-0 right-0 h-15 bg-white z-50 border-b border-gray-200 flex px-9vw justify-between items-center">
            <LearnChain />
            <div className="flex justify-end gap-2.5">
                <Link to="/login">
                    <button className="bg-gray-900 text-white text-sm cursor-pointer border-none rounded-lg px-3 py-2">Login</button>
                </Link>
                <Link to="/join">
                    <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-white w-22.5 h-9 inline-block font-inter text-sm font-medium px-3 py-2 border-none rounded-lg cursor-pointer">Join Now</button>
                </Link>
            </div>
        </div>
    )
}