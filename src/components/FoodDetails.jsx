import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food);
    const {
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expiredDateTime,
        additionalNotes,
        donorImage,
        donorName,
        donorEmail,
        status
    } = food;

    const isExpired = new Date(expiredDateTime) < new Date();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img src={foodImage} alt={foodName} className="w-full rounded-xl shadow-lg mb-6" />

            <div className="mb-6">
                <h1 className="text-4xl font-extrabold text-green-700 mb-2">{foodName}</h1>
                <p className="text-gray-600 mb-1"><strong>Quantity:</strong> {foodQuantity}</p>
                <p className="text-gray-600 mb-1"><strong>Pickup Location:</strong> {pickupLocation}</p>
                <p className="text-gray-600 mb-1"><strong>Expires At:</strong> {expiredDateTime}</p>
                <p className="text-gray-600 mb-1"><strong>Status:</strong>
                    <span className={`ml-1 font-semibold ${status === 'available' ? 'text-green-500' : 'text-red-500'}`}>
                        {status}
                    </span>
                </p>
                <p className="text-gray-700 mt-4"><strong>Additional Notes:</strong> {additionalNotes || "None"}</p>
            </div>

            <div className="mt-6">
                {isExpired ? (
                    <p className="text-red-500 font-semibold">This food item has expired.</p>
                ) : (
                    <button className="btn btn-success">Request Pickup</button>
                )}
            </div>
            
        </div>
    );
};

export default FoodDetails;
