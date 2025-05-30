export const Calander = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Get today's date in UTC
  const todayUTC = new Date();
  const year = todayUTC.getUTCFullYear();
  const month = todayUTC.getUTCMonth(); // 0-based (0 = Jan)
  const todayDate = todayUTC.getUTCDate();

  // Get current month's name
  const monthName = todayUTC.toLocaleString('default', {
    month: 'long',
    timeZone: 'UTC',
  });

  // First day of the month (0 = Sunday, 6 = Saturday)
  const firstDayUTC = new Date(Date.UTC(year, month, 1));
  const firstWeekday = (firstDayUTC.getUTCDay() + 6) % 7; // Convert to 0 = Mon, 6 = Sun

  // Get number of days in the month
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

  return (
    <div className="w-full aspect-square bg-gradient-to-br from-blue-50 to-white rounded-[40px] shadow-lg border border-blue-100 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Calendar</h2>
        <h3 className="text-base font-semibold text-blue-800">
          {monthName} {year}
        </h3>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center text-blue-600 font-medium text-xs mb-2">
        {days.map((day) => (
          <div key={day} className="py-0.5">{day}</div>
        ))}
      </div>

      {/* Dates grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs flex-1">
        {/* Empty cells before first day */}
        {Array.from({ length: firstWeekday }).map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = i + 1;
          const isToday = date === todayDate;

          return (
            <div
              key={date}
              className={`py-1 rounded-full relative cursor-pointer transition-all duration-200 ${
                isToday
                  ? 'bg-gradient-to-b from-blue-400 to-blue-800 text-white font-semibold transform scale-100'
                  : 'hover:bg-blue-100 hover:shadow-sm'
              }`}
            >
              {isToday && (
                <div className="absolute inset-0 rounded-full border-1 border-blue-200 animate-pulse"></div>
              )}
              <span className="relative z-10">{date}</span>
            </div>
          );
        })}
      </div>

      {/* Coin Section */}
      <div className="mt-3 pt-3 border-t border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" 
            alt="Coins" 
            className="w-6 h-6"
          />
          <span className="text-sm font-medium text-gray-700">23 tokens</span>
        </div>
        <a 
          href="/redeem" 
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          Redeem
        </a>
      </div>
    </div>
  );
};
