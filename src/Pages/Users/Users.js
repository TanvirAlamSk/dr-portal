import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Users = () => {
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () =>
            await fetch("http://localhost:5000/users")
                .then((response) => response.json())

    })

    const handelUserAdmin = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allusers.map((user, i) => <tr className="bg-base-200 " key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {user?.role !== "Admin" &&
                                    <td><button onClick={() => handelUserAdmin(user._id)} className='bg-green-500 text-white p-1 rounded'>Make Admin</button></td>
                                }
                                <td><button className='bg-red-500  text-white p-1 rounded'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;