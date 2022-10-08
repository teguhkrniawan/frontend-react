import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const UserList = () => {
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
