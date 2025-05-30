import '../cssFiles/welcome.css'
import {Link} from "react-router-dom"

export function Welcome() {
    return(
        <div className='welcome-container'>
            <div className='h1-container'>
                <h1 className='welcome-text'>
                    <span className="gradient-text-2">learnChain:</span>
                    <span className="other-text">IIITV Learning, On the Chain!</span>
                </h1>
            </div>
            <p>Blockchain-powered learning rewards for IIITV students.</p>
            <div className='buttons'>
                <Link to="/leaderboard">
                    <button id="btn-1">Explore Leaderboard</button>
                </Link>
                <Link to="/">
                    <button id="btn-2">Explore Rewards</button>
                </Link>
            </div>
        </div>
    )
}