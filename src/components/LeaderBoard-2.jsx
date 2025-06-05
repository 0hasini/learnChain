import "../cssFiles/LeaderBoard.css";
import boyImage from '../assets/boy.png';


const top3 = [
  { rank: 1, name: "p1stachio", coins: 1200, image: "https://peeekaboo.in/cdn/shop/files/FunnyCatMeme.jpg?v=1728374947&width=1946" },
  { rank: 2, name: "nova", coins: 1100, image: "https://imgflip.com/s/meme/Cute-Cat.jpg" },
  { rank: 3, name: "tescotesla", coins: 1000, image: "https://images.cults3d.com/KX50Va-8nyWH7oozXkxFxtlpiH4=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/20978983/illustration-file/b3f99bca-dce3-40e2-9db9-baa355bfe35b/sad-thumbs-up-cat.jpg" },
];

const others = [
  { rank: 4, name: "roblox", coins: 950, image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" },
  { rank: 5, name: "Hasini Reddy", coins: 900, image: boyImage },
  { rank: 6, name: "y2yami", coins: 850, image: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg" },
  { rank: 7, name: "octopush", coins: 800, image: "https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg" },
  { rank: 8, name: "duck.kk", coins: 750, image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg" },
  { rank: 9, name: "fromclush", coins: 700, image: "https://images.pexels.com/photos/1741206/pexels-photo-1741206.jpeg" },
  { rank: 10, name: "anne", coins: 650, image: "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg" },
  { rank: 11, name: "max", coins: 600, image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" },
  { rank: 12, name: "luna", coins: 550, image: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg" },
];

export const LeaderBoard2 = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white rounded-[40px] shadow-lg border border-blue-100 p-4 mb-6">
      <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">Leaderboard</div>
      
      {/* Top 3 */}
      <div className="flex justify-center items-center gap-8 mb-6">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="w-16 h-16 rounded-full border-2 border-blue-300 shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img src={top3[1].image} alt="Second Place" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-semibold text-sm text-gray-800">{top3[1].name}</div>
            <div className="text-xs text-gray-600">{top3[1].coins} tokens</div>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="w-20 h-20 rounded-full border-2 border-yellow-400 shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img src={top3[0].image} alt="First Place" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full">
              1
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-semibold text-sm text-gray-800">{top3[0].name}</div>
            <div className="text-xs text-gray-600">{top3[0].coins} tokens</div>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="w-16 h-16 rounded-full border-2 border-orange-300 shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img src={top3[2].image} alt="Third Place" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full">
              3
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-semibold text-sm text-gray-800">{top3[2].name}</div>
            <div className="text-xs text-gray-600">{top3[2].coins} tokens</div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-gray-200 font-semibold text-sm text-gray-600">
          <div className="col-span-2">Rank</div>
          <div className="col-span-7">Username</div>
          <div className="col-span-3 text-right">Tokens</div>
        </div>
        <div className="max-h-[140px] overflow-y-auto">
          {others.map((p) => (
            <div 
              key={p.rank} 
              className={`grid grid-cols-12 gap-2 px-3 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                p.name === "Hasini Reddy" ? "bg-blue-50 hover:bg-blue-100" : ""
              }`}
            >
              <div className={`col-span-2 text-sm ${p.name === "Hasini Reddy" ? "text-blue-600 font-semibold" : "text-gray-600"}`}>
                {p.rank}
              </div>
              <div className="col-span-7 flex items-center gap-2">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className={`w-8 h-8 rounded-full border ${
                    p.name === "Hasini Reddy" ? "border-blue-400" : "border-gray-200"
                  }`}
                />
                <span className={`text-sm ${p.name === "Hasini Reddy" ? "text-blue-600 font-semibold" : "text-gray-800"}`}>
                  {p.name}
                </span>
              </div>
              <div className={`col-span-3 text-right text-sm ${
                p.name === "Hasini Reddy" ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}>
                {p.coins}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};