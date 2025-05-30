import '../cssFiles/joinBanner.css'
import {Link} from "react-router-dom"
export function JoinBanner(){
    return (
        <div className="joinNow">
            <div className='text-container'>
                <h3 className='heading'>Built for IIITV, learnChain turns learning into rewards  <br/>on a secure campus blockchain!</h3>
                <div className='sub-heading'>Learn with peers. Earn with learnChain. Start now!</div>
                <div className='btns'>
                    <Link to="/login">
                        <button id='login-btn'>Login</button>
                    </Link>
                    <Link to="/join">
                        <button id='join-btn'>Join Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}