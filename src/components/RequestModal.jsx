import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const RequestModal = ({ food, onClose }) => {
  const { user } = useContext(AuthContext);
  const [notes, setNotes] = useState("");

  const {
    _id,
    foodName,
    foodImage,
    donorEmail,
    donorName,
    pickupLocation,
    expiredDateTime
  } = food;

  const requestDate = new Date().toISOString();

  const handleRequest = async () => {
    try {
      const requestData = {
        foodId: _id,
        foodName,
        foodImage,
        donorEmail,
        donorName,
        userEmail: user?.email,
        requestDate,
        pickupLocation,
        expiredDateTime,
        additionalNotes: notes,
      };

      await axios.post("http://localhost:3000/requested-foods", requestData);
      await axios.patch(`http://localhost:3000/foods/${_id}`, { status: "requested" });

      Swal.fire("Request submitted!", "", "success");
      onClose();
    } catch (error) {
      console.error("Request error:", error);
      Swal.fire("Something went wrong", error.message, "error");
    }
  };

  return (
    <div className=" inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-xl relative">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Request Food</h2>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex ">
            <label className="label font-medium">Food Name</label>
            <input disabled value={foodName} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Food Image URL</label>
            <input disabled value={foodImage} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Food ID</label>
            <input disabled value={_id} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Donator Email</label>
            <input disabled value={donorEmail} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Donator Name</label>
            <input disabled value={donorName} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Your Email</label>
            <input disabled value={user?.email} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Request Date</label>
            <input disabled value={requestDate} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Pickup Location</label>
            <input disabled value={pickupLocation} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex ">
            <label className="label font-medium">Expire Date</label>
            <input disabled value={expiredDateTime} className="input input-bordered w-full mx-4" />
          </div>

          <div className="flex">
            <label className="label font-medium">Additional Notes</label>
            <textarea
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full mx-4"
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-success" onClick={handleRequest}>Request</button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;


