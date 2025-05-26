import { LearnChain } from "./learnChain";
import "../cssFiles/navbar.css"
import {Link} from "react-router-dom"


export function Navbar() {
    return(
        <div className="navbar">
            <LearnChain />
            <div style={{display: "flex", justifyContent: "flex-end", gap: "10px"}}>
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
                <Link to="/join">
                    <button className="join-now-button">Join Now</button>
                </Link>
            </div>
        </div>
    )
}