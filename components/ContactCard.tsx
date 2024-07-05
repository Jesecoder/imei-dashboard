// components/ContactCard.tsx
const ContactCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
      <div className="p-3 bg-teal-500 rounded-full text-white">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 3a1 1 0 00-2 0v4a1 1 0 002 0V8z" />
        </svg>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-bold">Contact</h3>
        <p className="text-gray-600">Get in touch with us</p>
      </div>
    </div>
  );
};

export default ContactCard;
