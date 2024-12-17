import React from 'react';

const CampaignSettings = () => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <h2 className="font-bold mb-2">Campaign name</h2>
      <input
        type="text"
        placeholder="Enter full name"
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <h2 className="font-bold mb-2">Advanced settings</h2>
      <textarea
        placeholder="Add comments"
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
      ></textarea>

      <h2 className="font-bold mb-2">Video title (100 characters max)*</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <h2 className="font-bold mb-2">Visibility</h2>
      <select className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option>Public</option>
        <option>Private</option>
      </select>

      <h2 className="font-bold mb-2">Select category</h2>
      <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400">
        <option>Sound</option>
        <option>Music</option>
      </select>
    </div>
  );
};

export default CampaignSettings;
