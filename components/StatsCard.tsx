// components/StatCard.tsx
const StatCard = ({ title, value, description, icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
      <div className="p-3 bg-blue-500 rounded-full text-white">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-bold">{value}</h3>
        <p className="text-gray-600">{title}</p>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default StatCard;

