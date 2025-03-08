import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupCard = ({ group }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/community/${group.id}`);
  };

  return (
    <div 
        className="rounded-lg p-4 shadow-md"
        onClick={handleClick}
    >
      <img src={group.cover_image} alt={group.community_name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{group.community_name}</h2>
      <p className="text-gray-600 mt-1">{group.short_description}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">Request to Join</button>
    </div>
  );
};

export default GroupCard;
