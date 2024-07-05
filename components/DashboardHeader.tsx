// components/DashboardHeader.tsx
const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Home</h1>
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">3.56 $</span>
        <div className="relative">
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 3a1 1 0 00-2 0v4a1 1 0 002 0V8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
