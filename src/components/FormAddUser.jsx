import React from 'react'

const FormAddUser = () => {
    return (
        <div>
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>add a new user</h2>

            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label htmlFor="name" className="label">Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Your name' />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="email" className="label">Email</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Your email' />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="password" className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" placeholder='Your Password' />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="password" className="label">Confirm Password</label>
                                <div className="control">
                                    <input type="password" className="input" placeholder='Your Password' />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="role" className="label">Role</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option value="admin">ADMIN</option>
                                            <option value="user">USER</option>
                                        </select>
                                    </div>
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

export default FormAddUser