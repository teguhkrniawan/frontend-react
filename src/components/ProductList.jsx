import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const ProductList = () => {
    return (
        <div>
            <div className="columns">
                <div className="column">
                    <h1 className='title'>Products</h1>
                    <h2 className='subtitle'>list of products</h2>
                </div>
                <div className="column is-2">
                    <NavLink to={"/products/add"} className="button is-success mt-3">
                        <IoAdd /> Add Product
                    </NavLink>
                </div>
            </div>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name of Product</th>
                        <th>Price</th>
                        <th>Created By</th>
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
