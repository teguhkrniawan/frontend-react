import React, { useEffect } from 'react'
import { Layout } from './Layout'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
import Welcome from '../components/Welcome'

export const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, user } = useSelector((state => state.auth))

  // panggil get me dri backend
  useEffect(() => {
    dispatch(getMe());
  }, []);

  // validasi hasil dari get me
  useEffect(() => {
    if(isError){
      navigate('/');
    }

    if(user == null){
      navigate('/')
    }

  }, [isError, navigate, user]);

  return (
    <Layout>
        <Welcome />
    </Layout>
  )
}
