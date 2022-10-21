import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [role, setRole] = useState('');

    const [isLoading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const alertFn = () => {
        setShowAlert(!showAlert)
    }

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        setLoading(!isLoading);

        try {
            const response = await axios.post('http://103.209.186.82:3002/users', {
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

    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfPass('')
        setRole('admin')
    }
    

    return (
        <div>
            <h1 className='title'>Users</h1>
            <h2 className='subtitle'>add a new user</h2>

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


            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveUser}>
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

export default FormAddUser