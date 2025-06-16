import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../components/FoodCard';

const AvailableFoods = () => {
  const allFoods = useLoaderData();
  const [sortedFoods, setSortedFoods] = useState(allFoods);
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...allFoods].sort((a, b) => {
      const dateA = new Date(a.expiredDateTime);
      const dateB = new Date(b.expiredDateTime);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setSortedFoods(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Available Foods for Donation
      </h1>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Sort by Expiration</option>
          <option value="asc">Earliest Expiry</option>
          <option value="desc">Latest Expiry</option>
        </select>
      </div>

      {/* Food Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedFoods.map(food => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;


