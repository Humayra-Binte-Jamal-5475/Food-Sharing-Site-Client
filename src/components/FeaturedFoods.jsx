import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("https://food-loop-server-nu.vercel.app/foods")
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data].sort((a, b) => {
                    const qtyA = parseInt(a.foodQuantity);
                    const qtyB = parseInt(b.foodQuantity);
                    return qtyB - qtyA;
                });
                setFoods(sorted.slice(0, 6));
            });
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-10 px-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-green-700">Featured Foods</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {foods.map((food) => (
                    <div
                        key={food._id}
                        className="border-white border-2 bg-green-50 rounded-lg p-4 shadow hover:shadow-2xl transition"
                    >
                        <img
                            src={food.foodImage}
                            alt={food.foodName}
                            className="w-full h-40 object-cover rounded mb-3"
                        />
                        <h3 className="text-xl font-semibold mb-1">{food.foodName}</h3>
                        <p className="text-sm text-gray-700 mb-1">
                            Quantity: {food.foodQuantity}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            Pickup: {food.pickupLocation}
                        </p>
                        <p className="text-xs text-gray-500">Status: <span className="text-green-700">{food.status}</span></p>
                    </div>
                ))}
            </div>
            <div className="py-10">
                <Link to="/available-foods">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Show All
                </button>
            </Link>
            </div>
        </section>
    );
};

export default FeaturedFoods;



