import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
    const { loginUser } = useContext(AuthContext)
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () =>
            await fetch(`http://localhost:5000/bookings?email=${loginUser?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("Access-Token")}`
                }
            })
                .then((response) => response.json())

        // ------ same but different way
        //     queryFn: async() => {
        //     const response = await fetch(`http://localhost:5000/bookings?email=${loginUser?.email}`)
        //     const data = await response.json()
        //     return data; 
        // }
    })


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Day</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{booking.patientName}</td>
                                <td>{booking.name}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.timeSlot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;