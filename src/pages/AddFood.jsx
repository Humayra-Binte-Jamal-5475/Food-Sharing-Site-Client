import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddFood = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    foodQuantity: "",
    pickupLocation: "",
    expiredDateTime: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      ...formData,
      donorName: user?.displayName,
      donorEmail: user?.email,
      donorImage: user?.photoURL,
      status: "available",
    };

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Food added successfully!", "", "success").then(() => {
            e.target.reset();
            navigate("/available-food");
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Add Food</h2>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <input name="foodName" placeholder="Food Name" required onChange={handleChange} className="input input-bordered" />
        <input name="foodImage" placeholder="Food Image URL" required onChange={handleChange} className="input input-bordered" />
        <input name="foodQuantity" placeholder="Quantity" required onChange={handleChange} className="input input-bordered" />
        <input name="pickupLocation" placeholder="Pickup Location" required onChange={handleChange} className="input input-bordered" />
        <input type="datetime-local" name="expiredDateTime" required onChange={handleChange} className="input input-bordered" />
        <textarea name="additionalNotes" placeholder="Additional Notes" onChange={handleChange} className="textarea textarea-bordered" />
        <button type="submit" className="btn btn-success">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
