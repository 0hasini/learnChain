import {Link} from "react-router-dom"

export function Welcome() {
    return(
        <div className='flex flex-col justify-center items-center text-gray-900/90 pt-37.5 pb-12.5'>
            <div className='flex justify-center text-center pb-2'>
                <h1 className='text-5xl font-bold tracking-tight mb-2 w-70%'>
                    <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent inline-block font-inter text-5xl font-bold tracking-tight pr-1.5">learnChain:</span>
                    <span className="bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent">IIITV Learning, On the Chain!</span>
                </h1>
            </div>
            <p className="m-0">Blockchain-powered learning rewards for IIITV students.</p>
            <div className='pt-5 pb-5 mb-5'>
                <Link to="/leaderboard">
                    <button className="bg-gradient-to-b from-blue-400 to-blue-700 text-gray-50 w-33.75 h-8 inline-block font-inter text-xs font-medium px-2.75 py-2 border-none rounded-lg cursor-pointer transition-colors duration-300 ease-in-out mr-2.5">Explore Leaderboard</button>
                </Link>
                <Link to="/">
                    <button className="bg-gray-900 text-gray-50 w-30 h-8 inline-block font-inter text-xs font-medium px-3 py-2 border-none rounded-lg cursor-pointer transition-colors duration-300 ease-in-out">Explore Rewards</button>
                </Link>
            </div>
        </div>
    )
}