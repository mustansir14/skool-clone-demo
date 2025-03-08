import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import GroupCard from '../components/GroupCard';
import groupsData from '../data/groups.json';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = groupsData.filter((group) =>
    group.community_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;