import { NavbarS } from "./navbar-s";
import { Calander } from "./Calander";
import { useState, useRef } from "react";
import React from "react";

const assignmentTabs = ["Done", "Upcomming", "Missing"];
const doneFilters = ["Reviewed", "Review in progress", "Peer Assignment Review"];

const doneAssignments = [
  { title: "", instructor: "", submitted: "", score: "9.1/10", reward: "0.91" },
  { title: "", instructor: "", submitted: "", score: "8.7/10", reward: "0.87" },
  { title: "", instructor: "", submitted: "", score: "9.2/10", reward: "0.92" },
];
const reviewAssignments = [
  { title: "", instructor: "", submitted: "", score: "-", reward: "-" },
  { title: "", instructor: "", submitted: "", score: "-", reward: "-" },
  { title: "", instructor: "", submitted: "", score: "-", reward: "-" },
];
const peerAssignments = [
  { title: "Title1", instructor: "Instructor1" },
  { title: "Title2", instructor: "Instructor2" }
];
const upcomingAssignments = [
  { title: "Title1", instructor: "Instructor1", deadline: "June 10" },
];
const missingAssignments = [
  { title: "", instructor: "", deadline: "DD/MM/YY" },
  { title: "", instructor: "", deadline: "DD/MM/YY" },
  { title: "", instructor: "", deadline: "DD/MM/YY" },
  { title: "", instructor: "", deadline: "DD/MM/YY" },
];

export const StudentDashboard2 = () => {
  const [activeTab, setActiveTab] = useState("Done");
  const [doneFilter, setDoneFilter] = useState(doneFilters[0]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState({});
  const [showAll, setShowAll] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Modal content for Upcomming and Peer Assignment Review
  const handleAssignmentClick = (type, data) => {
    setModalType(type);
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setModalData({});
  };

  // Helper to get visible assignments and if 'View all' is needed
  const getVisibleAssignments = (arr, key) => {
    const isAll = showAll[key];
    return {
      visible: isAll ? arr : arr.slice(0, 3),
      needsViewAll: arr.length > 3 && !isAll
    };
  };

  // For each tab/filter, use a unique key
  const doneKey = `done-${doneFilter}`;
  const upKey = 'upcoming';
  const missKey = 'missing';

  let visibleAssignments = [];
  let needsViewAll = false;
  if (activeTab === "Done") {
    let arr = [];
    if (doneFilter === "Reviewed") arr = doneAssignments;
    else if (doneFilter === "Review in progress") arr = reviewAssignments;
    else arr = peerAssignments;
    ({ visible: visibleAssignments, needsViewAll } = getVisibleAssignments(arr, doneKey));
  } else if (activeTab === "Upcomming") {
    ({ visible: visibleAssignments, needsViewAll } = getVisibleAssignments(upcomingAssignments, upKey));
  } else if (activeTab === "Missing") {
    ({ visible: visibleAssignments, needsViewAll } = getVisibleAssignments(missingAssignments, missKey));
  }

  return (
    <div className="min-h-screen bg-white text-blue-900">
      <NavbarS />
      <div className="px-[130px]">
        <div className="flex gap-8 mt-[100px]">
          {/* Left: Assignments */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-8 text-2xl font-bold mb-2">
              {assignmentTabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-1 border-b-4 transition-all duration-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 ${
                    activeTab === tab
                      ? "border-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 cursor-pointer"
                      : "border-transparent text-blue-300 hover:text-blue-600 cursor-pointer"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 text-xl">{tab}</span>
                </button>
              ))}
            </div>
            <div className="h-1 w-full bg-blue-100 mb-6 mt-1" />

            {/* Filters for Done tab */}
            {activeTab === "Done" && (
              <div className="mb-6 relative w-fit" ref={dropdownRef}>
                <button
                  className="text-lg font-extrabold bg-white border-2 border-blue-400 rounded-xl px-4 py-2 mb-2 focus:outline-none text-blue-900 flex items-center gap-2 cursor-pointer min-w-[220px] justify-between"
                  onClick={() => setDropdownOpen((open) => !open)}
                  type="button"
                >
                  <span>{doneFilter}</span>
                  <svg className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-1 w-full bg-white border-2 border-blue-200 rounded-xl shadow-lg z-10">
                    {doneFilters.map((f) => (
                      <div
                        key={f}
                        className={`px-4 py-2 text-lg font-semibold text-blue-900 cursor-pointer rounded-xl
                          ${hoveredOption === f ? 'bg-blue-100 font-extrabold' : doneFilter === f ? 'bg-blue-50 font-extrabold' : ''}
                        `}
                        onClick={() => { setDoneFilter(f); setDropdownOpen(false); }}
                        onMouseEnter={() => setHoveredOption(f)}
                        onMouseLeave={() => setHoveredOption(null)}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Assignment Cards */}
            <div className="space-y-5">
              {activeTab === "Done" && doneFilter === "Reviewed" && visibleAssignments.map((a, i) => (
                <div key={i} className="rounded-2xl border border-blue-200 px-6 py-4 flex justify-between items-center bg-white">
                  <div>
                    <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Title:</div>
                    <div className="font-semibold text-base">Instructor name:</div>
                    <div className="text-base">Submitted on:</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">Score: {a.score}</div>
                    <div className="font-semibold text-base">Reward Earned: {a.reward}</div>
                  </div>
                </div>
              ))}
              {activeTab === "Done" && doneFilter === "Review in progress" && visibleAssignments.map((a, i) => (
                <div key={i} className="rounded-2xl border border-blue-200 px-6 py-4 flex justify-between items-center bg-white">
                  <div>
                    <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Title:</div>
                    <div className="font-semibold text-base">Instructor name:</div>
                    <div className="text-base">Submitted on:</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">Score: {a.score}</div>
                    <div className="font-semibold text-base">Reward Earned: {a.reward}</div>
                  </div>
                </div>
              ))}
              {activeTab === "Done" && doneFilter === "Peer Assignment Review" && visibleAssignments.map((a, i) => (
                <div key={i} className="rounded-2xl border border-blue-200 px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-white">
                  <div className="mb-4 md:mb-0">
                    <div className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">{a.title}</div>
                    <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">{a.instructor}</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <button
                      className="border-2 border-blue-400 rounded-xl px-8 py-3 font-extrabold text-2xl bg-white text-blue-900 hover:bg-blue-50 transition mb-3 md:mb-0 cursor-pointer"
                      onClick={() => handleAssignmentClick("peer", a)}
                    >
                      Open Assignment
                    </button>
                    <button className="border-2 border-blue-400 rounded-xl px-8 py-3 font-extrabold text-2xl bg-white text-blue-900 hover:bg-blue-50 transition cursor-pointer">
                      Assign Score
                    </button>
                  </div>
                </div>
              ))}
              {activeTab === "Upcomming" && visibleAssignments.map((a, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-blue-200 px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-white cursor-pointer"
                  onClick={() => handleAssignmentClick("upcoming", a)}
                >
                  <div>
                    <div className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">{a.title}</div>
                    <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">{a.instructor}</div>
                  </div>
                  <div className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mt-4 md:mt-0">
                    Due {a.deadline}
                  </div>
                </div>
              ))}
              {activeTab === "Missing" && visibleAssignments.map((a, i) => (
                <div key={i} className="rounded-2xl border border-blue-200 px-6 py-4 flex justify-between items-center bg-white">
                  <div>
                    <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Title:</div>
                    <div className="font-semibold text-base">Instructor name:</div>
                    <div className="text-base text-red-400 font-bold">Deadline: {a.deadline}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* View all link */}
            {needsViewAll && (
              <div className="mt-6 text-center">
                <button
                  className="text-blue-600 font-bold hover:underline text-lg cursor-pointer"
                  onClick={() => {
                    if (activeTab === "Done") setShowAll({ ...showAll, [doneKey]: true });
                    else if (activeTab === "Upcomming") setShowAll({ ...showAll, [upKey]: true });
                    else if (activeTab === "Missing") setShowAll({ ...showAll, [missKey]: true });
                  }}
                >
                  View all
                </button>
              </div>
            )}
          </div>

          {/* Right: Calendar */}
          <div className="w-[330px]">
            <Calander />
          </div>
        </div>
      </div>

      {/* Modal for assignment details */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-3xl shadow-2xl p-10 min-w-[420px] max-w-[95vw] border-2 border-blue-200 relative">
            <button
              className="absolute top-4 right-4 text-blue-600 text-2xl font-bold hover:text-blue-800"
              onClick={closeModal}
            >
              &times;
            </button>
            {modalType === "upcoming" && (
              <div>
                <div className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">{modalData.title}</div>
                <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-6">{modalData.instructor}</div>
                <div className="flex justify-between items-center mb-8">
                  <div className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Due {modalData.deadline}</div>
                </div>
                <div className="flex gap-8">
                  <button className="border-2 border-blue-400 rounded-xl px-8 py-3 font-extrabold text-2xl bg-white text-blue-900 hover:bg-blue-50 transition cursor-pointer">+ Add your work</button>
                  <button className="border-2 border-blue-400 rounded-xl px-8 py-3 font-extrabold text-2xl bg-white text-blue-900 hover:bg-blue-50 transition cursor-pointer">Submit</button>
                </div>
              </div>
            )}
            {modalType === "peer" && (
              <div>
                <div className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">{modalData.title}</div>
                <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-6">{modalData.instructor}</div>
                <div className="flex gap-8">
                  <button className="border-2 border-blue-400 rounded-xl px-8 py-3 font-extrabold text-2xl bg-white text-blue-900 hover:bg-blue-50 transition">Open Assignment</button>
                  <button className="border-2 border-blue-400 rounded-xl px-8 py-3 font-extrabold text-2xl bg-white text-blue-900 hover:bg-blue-50 transition">Assign Score</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};