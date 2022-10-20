import React, { useEffect, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { FaPencilAlt, FaQrcode, FaTrash } from "react-icons/fa"
import ModalQr from './ModalQr';
import { FormatRupiah } from "@arismun/format-rupiah";


export const ProductList = () => {

    const [listProduct, setOfListProduct] = useState([]);
    const [qrCode, setQrCode] = useState(false);
    const [title, setTitle] = useState('');

    // handle show qr code
    const showQR = () => {
        setQrCode(!qrCode)
    }

    // hanlde untuk dapatin nama
    const getNama = (nama) => {
        setTitle(nama)
        showQR()
    }

    //handle delete
    const deleteFn = async (uuid) => {
        console.log(uuid)
        await axios.delete('http://localhost:3002/products/' +uuid);
        getProduct();
    }

    // handle get product
    const getProduct = async () => {
        const response = await axios.get('http://localhost:3002/products')
        setOfListProduct(response.data);
    }

    // apabila empty array berarti lifecylenya unmount
    useEffect(() => {
        getProduct()
    }, [])

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
                    {
                        // listProduct && (
                        //     listProduct.map((item, index) => (
                        //         <tr key={item.uuid}>
                        //             <td>{index + 1}</td>
                        //             <td>{item.nameProduct}</td>
                        //             <td>{item.price}</td>
                        //         </tr>
                        //     ))
                        // ) 

                        (listProduct.length > 0)
                            ? (
                                listProduct.map((item, index) => (
                                    <tr key={item.uuid}>
                                        <td>{index + 1}</td>
                                        <td>{item.nameProduct}</td>
                                        <td><FormatRupiah value={item.price} /></td>
                                        <td>{item.user.name}</td>
                                        <td>
                                            <button onClick={() => {
                                                getNama(item.nameProduct)
                                            }} className='button is-primary is-small is-rounded is-info mr-1'><FaQrcode /></button>
                                            <Link to={'/products/edit/' +item.uuid}>
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

            {
                qrCode && <ModalQr clickFn={showQR} title={title} />
            }
        </div>
    )
}
