import React, { useState } from 'react'
import axios from 'axios';

const FormAddProduct = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [showSuksesAlert, setSuksesAlert] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const alertFn = () => {
        setShowAlert(!showAlert)
    }

    const alertSuksesFn = () => {
        setSuksesAlert(!showSuksesAlert)
    }

    const reset = () => {
        setName('');
        setPrice('');
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://103.209.186.82:3002/products', {
                name: name,
                price: price
            })
            if(response){
                setLoading(false)
                setMsg(response.data.msg)
                setSuksesAlert(!showSuksesAlert)
            }
        } catch (error) {
            if(error.response){
                setLoading(false)
                setMsg(error.response.data.msg)
                setShowAlert(!showAlert)
            }
        }
    }

    return (
        <div>
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>Add a new product</h2>

            {
                showAlert && (
                    <div>
                        <div className="notification is-danger mb-4">
                            <button className="delete" onClick={alertFn}></button>
                            { msg }
                        </div>
                    </div>
                )
            }

            {
                showSuksesAlert && (
                    <div>
                        <div className="notification is-success mb-4">
                            <button className="delete" onClick={alertSuksesFn}></button>
                            { msg }
                        </div>
                    </div>
                )
            }

            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveProduct}>
                            <div className="field">
                                <label htmlFor="name" className="label">Name of product</label>
                                <div className="control">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder='Name of product' />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="price" className="label">Price</label>
                                <div className="control">
                                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="input" placeholder='Price' />
                                </div>
                            </div>

                            <div className="field" style={{ marginTop: '2rem' }}>
                                <div className='button is-secondary mr-2' onClick={reset}>RESET</div>
                                <button type='submit' className={`button is-primary ${isLoading ? 'is-loading' : ''}`}>SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddProduct