import React, {useEffect} from 'react'
import { Layout } from './Layout';
import { ProductList } from './../components/ProductList';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Products = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isError } = useSelector((state => state.auth))

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
            <ProductList />
        </Layout>
    )
}

export default Products