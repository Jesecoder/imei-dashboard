// components/APICard.tsx
const APICard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">API</h3>
      <p className="text-gray-600 mb-2">Our platform supports:</p>
      <ul className="text-gray-600 mb-4">
        <li>Instant PHP</li>
        <li>DHRU API</li>
      </ul>
      <button className="bg-blue-500 text-white p-2 rounded">API Manage</button>
    </div>
  );
};

export default APICard;
