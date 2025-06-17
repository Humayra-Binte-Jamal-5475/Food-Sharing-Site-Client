import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    const fetchFoods = async () => {
        const res = await axios.get(`http://localhost:3000/requests?userEmail=${user?.email}`);
        setFoods(res.data);
    };


    useEffect(() => {
        if (user?.email) fetchFoods();
    }, [user]);
    const handleUpdate = (id, currentNotes = '') => {
        Swal.fire({
            title: 'Update Notes',
            input: 'textarea',
            inputLabel: 'Your new notes:',
            inputValue: currentNotes,
            showCancelButton: true,
            confirmButtonText: 'Update',
            inputPlaceholder: 'Enter new notes...',
        }).then(async (result) => {
            if (result.isConfirmed && result.value.trim()) {
                await axios.patch(`http://localhost:3000/requests/${id}`, { additionalNotes: result.value.trim() });
                fetchFoods();
                Swal.fire('Updated!', 'Your request was updated.', 'success');
            }
        });
    };


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This request will be cancelled!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:3000/requests/${id}`);
                fetchFoods(); // Refresh list
                Swal.fire('Cancelled!', 'The request has been deleted.', 'success');
            }
        });
    };


    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Manage My Foods</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map(food => (
                            <tr key={food._id}>
                                <td><img src={food.foodImage} alt="" className="w-16 h-16 object-cover rounded" /></td>
                                <td>{food.foodName}</td>
                                <td>{food.foodQuantity}</td>
                                <td>{food.status}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning mr-2" onClick={() => handleUpdate(food._id, food.additionalNotes)}>
                                        Update
                                    </button>
                                    <button className="btn btn-sm btn-error" onClick={() => handleDelete(food._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {foods.length === 0 && <p className="text-center mt-4">No foods added yet.</p>}
            </div>
        </div>
    );
};

export default MyFoods;
