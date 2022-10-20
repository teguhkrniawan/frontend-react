import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5'
import { logout, reset } from '../features/authSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const logoutFunc = () => {
        if (user) {
            dispatch(logout());
            dispatch(reset());
            navigate('/');
        }
    }

    return (
        <div>
            <aside className="menu has-shadow p-3">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><NavLink to={"/dashboard"}><IoHome /> Dashboard</NavLink></li>
                    <li><NavLink to={"/products"}><IoPricetag /> Products</NavLink></li>
                </ul>
                {
                    user && user.role === 'admin' &&
                    (
                        <div>
                            <p className="menu-label">
                                Administration
                            </p>
                            <ul className="menu-list">
                                <li><NavLink to={"/users"}><IoPerson /> Users</NavLink></li>
                            </ul>
                        </div>
                    )
                }
                <p className="menu-label">
                    Settings
                </p>
                <ul className="menu-list">
                    <li><button onClick={logoutFunc} className='button is-white'><IoLogOut /> Logout</button></li>
                </ul>
            </aside>
        </div>
    )
}
