import React, {useEffect} from 'react'
import { Layout } from './Layout'
import FormAddProduct from '../components/FormAddProduct';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddProduct = () => {

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
        <FormAddProduct />
    </Layout>
  )
}

export default AddProduct