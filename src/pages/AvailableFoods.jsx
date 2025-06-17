import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

const AvailableFoods = () => {
  const [sortedFoods, setSortedFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/foods')
      .then(res => {
        const available = res.data.filter(food => food.status === 'available');
        setSortedFoods(available);
      });
  }, []);

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...sortedFoods].sort((a, b) => {
      const dateA = new Date(a.expiredDateTime);
      const dateB = new Date(b.expiredDateTime);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setSortedFoods(sorted);
  };

  const filteredFoods = sortedFoods.filter(food =>
    food.foodName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Available Foods for Donation
      </h1>

      {/* Search & Sort Controls */}
      <div className="flex justify-between mb-6 flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by food name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-4xl"
        />

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
        {filteredFoods.map(food => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No food items match your search.</p>
      )}
    </div>
  );
};

export default AvailableFoods;



