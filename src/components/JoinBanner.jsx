import {Link} from "react-router-dom"
export function JoinBanner(){
    return (
        <div className="w-80vw h-62.5 bg-gradient-to-b from-blue-400 to-blue-700 rounded-2xl font-roboto-slab mb-15 ml-9vw">
            <div className='pt-7.5 pl-6.25'>
                <h3 className='text-white text-xl font-semibold pb-1.5 m-0'>Built for IIITV, learnChain turns learning into rewards  <br/>on a secure campus blockchain!</h3>
                <div className='text-gray-200 text-sm m-0'>Learn with peers. Earn with learnChain. Start now!</div>
                <div className='mt-3'>
                    <Link to="/login">
                        <button className="bg-gray-900 text-gray-50 w-21.25 h-8 inline-block font-inter text-xs font-medium px-2.75 py-2 border-none rounded-lg cursor-pointer transition-colors duration-300 ease-in-out mr-2.5">Login</button>
                    </Link>
                    <Link to="/join">
                        <button className="bg-gray-100 text-gray-900 w-25 h-8 inline-block font-inter text-xs font-medium px-2.75 py-2 border-none rounded-lg cursor-pointer transition-colors duration-300 ease-in-out mr-2.5">Join Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}