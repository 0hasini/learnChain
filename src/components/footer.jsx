import "../cssFiles/footer.css";

export function Footer() {
    return (
        <div className="border-t border-gray-200 mt-auto mx-9vw">
            <div className="flex justify-between px-10 py-5">
                <div className="min-w-32.5">
                    <div className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent font-inter text-xl font-bold tracking-tight">learnChain</div>
                    <div className="text-gray-900 text-sm mt-1">IIITV learning, on the chain.</div>
                </div>

                <div className="min-w-32.5">
                    <a href="/about" className="block text-blue-700 no-underline mb-1.5 text-sm font-medium">About</a>
                    <a href="/contact" className="block text-blue-700 no-underline mb-1.5 text-sm font-medium">Contact</a>
                    <a href="/privacy" className="block text-blue-700 no-underline mb-1.5 text-sm font-medium">Privacy</a>
                </div>

                <div className="min-w-32.5">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-blue-700 no-underline mb-1.5 text-sm font-medium">Twitter</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-blue-700 no-underline mb-1.5 text-sm font-medium">GitHub</a>
                </div>
            </div>

            <div className="text-center mt-5 text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} learnChain. All rights reserved.</p>
            </div>
        </div>
    );
}
