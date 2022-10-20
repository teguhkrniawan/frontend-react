import React, { useState, useEffect } from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import axios  from 'axios';
import { FaPencilAlt, FaTrash } from "react-icons/fa"

export const UserList = () => {

    const [listUsers, setOfListUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3002/users');
        setOfListUsers(response.data);
    }

     //handle delete
    const deleteFn = async (uuid) => {
        console.log(uuid)
        await axios.delete('http://localhost:3002/users/' +uuid);
        getUsers();
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            <div className="columns">
                <div className="column">
                    <h1 className='title'>Users</h1>
                    <h2 className='subtitle'>list of Users</h2>
                </div>
                <div className="column is-2">
                    <NavLink to={"/users/add"} className="button is-success mt-3">
                        <IoAdd /> Add Users
                    </NavLink>
                </div>
            </div>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (listUsers.length > 0)
                            ? (
                                listUsers.map((item, index) => (
                                    <tr key={item.uuid}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <Link to={'/users/edit/' +item.uuid}>
                                                <span className='button is-primary is-small is-rounded is-warning mr-1'><FaPencilAlt /></span>
                                            </Link>
                                            <button onClick={() => {
                                                deleteFn(item.uuid)
                                            }} className='button is-primary is-small is-rounded is-danger'><FaTrash /></button>
                                        </td>
                                    </tr>
                                ))
                            )
                            : (
                                <tr>
                                    <td colSpan="5" className='has-text-centered'>No data</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
