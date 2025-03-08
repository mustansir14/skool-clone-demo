import React from 'react';
import { useParams } from 'react-router-dom';
import groupsData from '../data/groups.json';
import htmlParser from 'html-react-parser';


const GroupPage = () => {
  const { groupId } = useParams();
  const group = groupsData.find((g) => g.id === parseInt(groupId));

  if (!group) {
    return <div>Group not found.</div>;
  }

  // Function to check if the media URL is a Loom embed link
  const isLoomEmbed = (url) => url.includes("loom.com/embed");

  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mt-4 mb-2">{group.community_name}</h2>
      {/* Media Section: Loom Video, Normal Video, or Image */}
      <div className="w-full h-64 rounded-lg shadow-md overflow-hidden mb-4">
        {isLoomEmbed(group.media_url) ? (
          // Embed Loom Video
          <iframe
            src={group.media_url}
            title={group.name}
            className="w-full h-full"
            allowFullScreen
          />
        ) : group.media_url.endsWith(".mp4") || group.media_url.includes("video") ? (
          // Normal Video
          <video src={group.media_url} controls className="w-full h-full object-cover" />
        ) : (
          // Image
          <img src={group.cover_image} alt={group.name} className="w-full h-full object-cover" />
        )}
      </div>

      <p className="text-gray-700 mt-2">
        {/* Apply styling to lists */}
        <div className="prose">
            {htmlParser(group.long_description)}
        </div>
      </p>
      {/* Add more detailed information as needed */}
    </div>
  );
};

export default GroupPage;
