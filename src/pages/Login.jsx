import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Modalku from '../components/Modalku'
import { loginUser, reset } from '../features/authSlice'
import { FaEnvelope } from 'react-icons/fa'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        user,
        isError,
        isSuccess,
        isLoading,
        message
    } = useSelector(state => state.auth)

    const Auth = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
    }

    const closeModal = (e) => {
        e.preventDefault();
        dispatch(reset());
    }

    useEffect(() => {
        if (user && isSuccess) {
            return navigate('/dashboard');
        }
        dispatch(reset())
    }, [user, isSuccess])

    return (
        <div>
            <section className="hero is-success is-fullwidth is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5">
                                <form onSubmit={Auth} className="box">

                                    <h3 className='title' style={{ color: 'black' }}>Sign In</h3>
                                    <div className="field">
                                        <label htmlFor="email" className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder='Your email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <span class="icon is-small is-left">
                                                <FaEnvelope/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label htmlFor="password" className="label">Password</label>
                                        <div className="control">
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder='Your Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="field" style={{ marginTop: '2rem' }}>
                                        <button type='submit' className='button is-primary is-fullwidth'>
                                            {
                                                isLoading ? 'Loading ..' : 'LOGIN'
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                isError && <Modalku onClick={closeModal} message={message} />
            }
        </div>
    )
}
