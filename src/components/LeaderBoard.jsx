// import "./Leaderboard.css";
import "../cssFiles/LeaderBoard.css"
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
        <div className="leaderboard-container">
            <div className="leaderboard-heading">Leaderboard</div>
            <div className="leaderboard-content">
                {/* Left side - Podium */}
                <div className="podium-3d-wrapper">
                    {/* 2nd Place */}
                    <div className="podium-block second">
                        <div className="podium-info">
                            <img src={top3[1].image} alt="Second Place" className="podium-avatar" />
                            <div className="podium-name">{top3[1].name}</div>
                            <div className="podium-score">{top3[1].coins} tokens</div>
                        </div>
                        <div className="podium-cuboid podium-cuboid-second">
                            <div className="podium-rank">2</div>
                        </div>
                    </div>
                    {/* 1st Place */}
                    <div className="podium-block first">
                        <div className="podium-info">
                            <div className="podium-trophy">🏆</div>
                            <img src={top3[0].image} alt="First Place" className="podium-avatar" />
                            <div className="podium-name">{top3[0].name}</div>
                            <div className="podium-score">{top3[0].coins} tokens</div>
                        </div>
                        <div className="podium-cuboid podium-cuboid-first">
                            <div className="podium-rank">1</div>
                        </div>
                    </div>
                    {/* 3rd Place */}
                    <div className="podium-block third">
                        <div className="podium-info">
                            <img src={top3[2].image} alt="Third Place" className="podium-avatar" />
                            <div className="podium-name">{top3[2].name}</div>
                            <div className="podium-score">{top3[2].coins} tokens</div>
                        </div>
                        <div className="podium-cuboid podium-cuboid-third">
                            <div className="podium-rank">3</div>
                        </div>
                    </div>
                </div>

                {/* Right side - List */}
                <div className="others">
                    <div className="list-heading">
                        <div className="rank">Rank</div>
                        <div className="participant">Username</div>
                        <div className="coins">Token</div>
                    </div>
                    <div className="scrollable-list">
                        {others.map((p) => (
                            <div className="other-row" key={p.rank}>
                                <div className="rank">{p.rank}</div>
                                <div className="participant">
                                    <img src={p.image} alt={p.name} className="participant-image"/>
                                    <span>{p.name}</span>
                                </div>
                                <div className="coins">{p.coins}</div>
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
