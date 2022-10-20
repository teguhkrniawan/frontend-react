import React,  { useEffect} from 'react'
import { Layout } from './Layout';
import FormAddUser from './../components/FormAddUser';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddUsers = () => {

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

      if(user && user.role !== 'admin'){
          navigate('/dashboard')
      }
  }, [isError, navigate, user]);

  return (
    <Layout>
        <FormAddUser />
    </Layout>
  )
}

export default AddUsers