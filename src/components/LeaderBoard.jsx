// import "./Leaderboard.css";
import {Navbar} from "./navbar"
import {Footer} from "./footer"

const top3 = [
  { rank: 1, name: "p1stachio", coins: 1200, image: "https://peeekaboo.in/cdn/shop/files/FunnyCatMeme.jpg?v=1728374947&width=1946" },
  { rank: 2, name: "nova", coins: 1100, image: "https://imgflip.com/s/meme/Cute-Cat.jpg" },
  { rank: 3, name: "tescotesla", coins: 1000, image: "https://images.cults3d.com/KX50Va-8nyWH7oozXkxFxtlpiH4=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/20978983/illustration-file/b3f99bca-dce3-40e2-9db9-baa355bfe35b/sad-thumbs-up-cat.jpg" },
];

const others = [
  { rank: 4, name: "roblox", coins: 950, image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" },
  { rank: 5, name: "ikeaa", coins: 900, image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg" },
  { rank: 6, name: "y2yami", coins: 850, image: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg" },
  { rank: 7, name: "octopush", coins: 800, image: "https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg" },
  { rank: 8, name: "duck.kk", coins: 750, image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg" },
  { rank: 9, name: "fromclush", coins: 700, image: "https://images.pexels.com/photos/1741206/pexels-photo-1741206.jpeg" },
  { rank: 10, name: "anne", coins: 650, image: "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg" },
];

export function LeaderBoard() {
  return (
    <div>
        <Navbar/>
        <div className="ml-37.5 mr-37.5 pt-7.5 pl-12.5 pr-12.5 mt-25 mb-17.5 bg-gray-50 rounded-10xl shadow-2xl border border-white/5">
            <div className="text-5xl font-black text-center tracking-tight bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent mb-13.75">Leaderboard</div>
            <div className="flex gap-10 items-start">
                {/* Left side - Podium */}
                <div className="flex-0-45 flex justify-center items-end relative min-h-80 pt-10">
                    {/* 2nd Place */}
                    <div className="flex flex-col items-center justify-end relative m-0 z-10">
                        <div className="flex flex-col items-center justify-end mb-0 relative z-10 mb-1">
                            <img src={top3[1].image} alt="Second Place" className="w-16 h-16 rounded-full border-3 border-white shadow-lg bg-gray-800 object-cover" />
                            <div className="text-black text-lg font-semibold text-center">{top3[1].name}</div>
                            <div className="text-black text-sm rounded-lg px-2.5 mb-2 inline-block">{top3[1].coins} tokens</div>
                        </div>
                        <div className="w-30 flex flex-col items-center justify-end relative m-0 bg-gradient-to-b from-blue-400 to-blue-700 shadow-2xl rounded-t-4xl h-32.5 z-10 -ml-2">
                            <div className="w-full text-center font-bold text-gray-200 pb-3 pt-2 tracking-wider bg-transparent rounded-none shadow-none m-0 relative z-10 text-5xl">2</div>
                        </div>
                    </div>
                    {/* 1st Place */}
                    <div className="flex flex-col items-center justify-end relative m-0 z-30">
                        <div className="flex flex-col items-center justify-end mb-0 relative z-10">
                            <div className="absolute -top-11 left-1/2 transform -translate-x-1/2 text-3xl z-30">🏆</div>
                            <img src={top3[0].image} alt="First Place" className="w-16 h-16 rounded-full border-3 border-white shadow-lg bg-gray-800 object-cover" />
                            <div className="text-black text-lg font-semibold text-center">{top3[0].name}</div>
                            <div className="text-black text-sm rounded-lg px-2.5 mb-2 inline-block">{top3[0].coins} tokens</div>
                        </div>
                        <div className="w-30 flex flex-col items-center justify-end relative m-0 bg-gradient-to-b from-blue-400 to-blue-700 shadow-2xl rounded-t-4xl h-50 z-30">
                            <div className="w-full text-center font-bold text-gray-200 pb-3 pt-2 tracking-wider bg-transparent rounded-none shadow-none m-0 relative z-10 text-7xl">1</div>
                        </div>
                    </div>
                    {/* 3rd Place */}
                    <div className="flex flex-col items-center justify-end relative m-0 z-10">
                        <div className="flex flex-col items-center justify-end mb-0 relative z-10 mb-1">
                            <img src={top3[2].image} alt="Third Place" className="w-16 h-16 rounded-full border-3 border-white shadow-lg bg-gray-800 object-cover" />
                            <div className="text-black text-lg font-semibold text-center">{top3[2].name}</div>
                            <div className="text-black text-sm rounded-lg px-2.5 mb-2 inline-block">{top3[2].coins} tokens</div>
                        </div>
                        <div className="w-30 flex flex-col items-center justify-end relative m-0 bg-gradient-to-b from-blue-400 to-blue-700 shadow-2xl rounded-t-4xl h-25 z-10 -ml-2">
                            <div className="w-full text-center font-bold text-gray-200 pb-3 pt-2 tracking-wider bg-transparent rounded-none shadow-none m-0 relative z-10 text-4xl">3</div>
                        </div>
                    </div>
                </div>

                {/* Right side - List */}
                <div className="flex-0-45 bg-white rounded-5xl p-5 shadow-lg mb-15">
                    <div className="flex justify-start font-bold text-lg py-2.5 m-0 border-b-2 border-gray-700 text-gray-800 rounded-t-4xl">
                        <div className="flex-0-60 text-left pl-2.5">Rank</div>
                        <div className="flex-1-180 text-left pl-5">Username</div>
                        <div className="flex-0-80 text-right pr-5">Token</div>
                    </div>
                    <div className="max-h-87.5 overflow-y-auto pr-2.5 rounded-b-4xl">
                        {others.map((p) => (
                            <div className="flex justify-start items-center py-1.25 border-b border-gray-700 transition-all duration-200 ease-in-out last:border-b-0" key={p.rank}>
                                <div className="flex-0-60 text-left pl-2.5 text-gray-800">{p.rank}</div>
                                <div className="flex-1-180 flex items-center gap-3 text-left pl-5 text-gray-800">
                                    <img src={p.image} alt={p.name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"/>
                                    <span>{p.name}</span>
                                </div>
                                <div className="flex-0-80 text-right pr-5 text-gray-800">{p.coins}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}
