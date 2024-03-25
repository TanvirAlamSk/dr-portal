import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => await fetch("http://localhost:5000/doctors")
            .then((response) => response.json())
    })
    console.log(doctors.length)

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
                            <td><button className='bg-red-500  text-white p-1 rounded'>Delete</button></td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageDoctors;