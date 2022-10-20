import React, { useEffect } from 'react'
import { Layout } from './Layout';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
import FormEditProduct from './../components/FormEditProduct';

const EditProduct = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isError, user } = useSelector((state => state.auth))

    // panggil get me dri backend
    useEffect(() => {
        dispatch(getMe());
    }, []);

    // validasi hasil dari get me
    useEffect(() => {
        if (isError) {
            navigate('/');
        }
    }, [isError, navigate]);

    return (
        <Layout>
            <FormEditProduct />
        </Layout>
    )
}

export default EditProduct