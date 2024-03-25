import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import DeleteDoctor from './DeleteDoctor/DeleteDoctor';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deleteDocInfo, setDeleteDocInfo] = useState("")
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => await fetch("http://localhost:5000/doctors")
            .then((response) => response.json())
    })

    const handelDeleteDoctor = (id) => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("Access-Token")}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch()
                    setDeleteDocInfo("")
                    toast.success("Doctor Delete Successfully")
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor, i) => <tr key={i}>
                            <td>{1 + i}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={`${doctor.photoUrl}`} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{doctor?.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <label htmlFor="doctor_modal" className=" bg-red-500  text-white p-1 rounded" onClick={() => setDeleteDocInfo(doctor)}>Delete</label>
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
            {
                deleteDocInfo &&
                <DeleteDoctor
                    deleteDocInfo={deleteDocInfo}
                    handelDeleteDoctor={handelDeleteDoctor}
                ></DeleteDoctor>
            }

        </div>
    );
};

export default ManageDoctors;