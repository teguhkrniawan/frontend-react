import React from 'react'

const FormAddProduct = () => {
    return (
        <div>
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>Add a new product</h2>

            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label htmlFor="name" className="label">Name of product</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Name of product' />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="price" className="label">Price</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Price' />
                                </div>
                            </div>

                            <div className="field" style={{ marginTop: '2rem' }}>
                                <button className='button is-secondary mr-2' type='reset'>RESET</button>
                                <button className='button is-primary'>SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddProduct