import "../cssFiles/footer.css";

export function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="learn-Chain">learnChain</div>
                    <div className="sub-text">IIITV learning on the chain.</div>
                </div>

                <div className="footer-center">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy</a>
                </div>

                <div className="footer-right">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} learnChain. All rights reserved.</p>
            </div>
        </div>
    );
}
