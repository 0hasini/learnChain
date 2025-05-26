import '../cssFiles/joinNow.css'



export function Joinnow(){
    return (
        <div className="joinNow">
            <div className='text-container'>
                <h3 className='heading'>Built for IIITV, learnChain turns learning into rewards  <br/>on a secure campus blockchain!</h3>
                <div className='sub-heading'>Learn with peers. Earn with learnChain. Start now!</div>
                <div className='btns'>
                    <button id='login-btn'>Login</button>
                    <button id='join-btn'>Join Now</button>
                </div>
            </div>
        </div>
    )
}