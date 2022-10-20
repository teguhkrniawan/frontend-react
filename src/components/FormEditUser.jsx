import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormEditUser = () => {

    const [isLoading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [role, setRole] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const alertFn = () => {
        setShowAlert(!showAlert)
    }

    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfPass('')
        setRole('admin')
    }
    
    useEffect(() => {
        const getUsersId = async () => {
            try {
                const response = await axios.get('http://localhost:3002/users/' + id)
                setName(response.data.name)
                setEmail(response.data.email)
                setRole(response.data.role)
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.msg)
                }
            }
        }
        getUsersId();
    }, [id])

    const updateUsers = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.patch('http://localhost:3002/users/' +id, {
                name: name,
                email: email,
                password: password,
                confPassword: confPass,
                role: role
            })
            if(response){
                setLoading(false)
                setMsg(response.data.msg)
                
                navigate('/users');
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
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>Edit users</h2>

            {
                showAlert && (
                    <div>
                        <div className="notification is-danger mb-4">
                            <button className="delete" onClick={alertFn}></button>
                            {msg}
                        </div>
                    </div>
                )
            }

            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateUsers}>
                            <div className="field">
                                <label htmlFor="name" className="label">Name</label>
                                <div className="control">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder='Your name' />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="email" className="label">Email</label>
                                <div className="control">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder='Your email' />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="password" className="label">Password</label>
                                <div className="control">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder='Your Password' />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="password" className="label">Confirm Password</label>
                                <div className="control">
                                    <input value={confPass} onChange={(e) => setConfPass(e.target.value)} type="password" className="input" placeholder='Your Password' />
                                </div>
                            </div>
                            <div className='field'>
                                <label htmlFor="role" className="label">Role</label>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                                            <option value="admin">ADMIN</option>
                                            <option value="user">USER</option>
                                        </select>
                                    </div>
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

export default FormEditUser