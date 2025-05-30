import { useNavigate } from "react-router-dom";

export const DashboardComponent = () => {
  const navigate = useNavigate();

  const handleNav = (type) => {
    if (["submit", "review", "track"].includes(type)) {
      navigate("/assignments");
    } else if (type === "question") {
      navigate("/questions");
    } else if (type === "reward") {
      navigate("/rewards");
    }
  };

  const cardBase =
    "flex items-center justify-center text-center font-bold text-gray-800 bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 select-none text-xl min-h-[240px] p-6";

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-8 w-full max-w-[800px] mx-auto">
      {/* Column 1 */}
      <div className={`${cardBase} row-start-1 col-start-1`} onClick={() => handleNav("submit")}>submit assignment</div>
      <div className={`${cardBase} row-start-2 col-start-1`} onClick={() => handleNav("track")}>Track feedback from peers</div>
      {/* Column 2 */}
      <div className={`${cardBase} row-start-1 col-start-2`} onClick={() => handleNav("review")}>review assigned peer assignments</div>
      <div className={`${cardBase} row-start-2 col-start-2`} onClick={() => handleNav("reward")}>Reward History</div>
      {/* Column 3 (spans both rows) */}
      <div className={`${cardBase} row-start-1 row-span-2 col-start-3 flex flex-col justify-center items-center text-3xl font-extrabold min-h-[260px]`} onClick={() => handleNav("question")}>Post/Answer a question</div>
    </div>
  );
}

