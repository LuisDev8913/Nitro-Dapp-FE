import React from 'react';
import { Footer, Header } from '../Views';
import AdminPanel from "../AdminPanel/AdminPanel";
import { Navigate } from 'react-router-dom';
import MainRoute from './MainRoute';

const AdminRoute = (props) => {
  console.log(props.isAuthenticated , " isAuthenticated")
  if (!props.isAuthenticated) {
    return <Navigate   to="/" />
  }
  return (
    <>
      <Header />
      <AdminPanel />
      <Footer />
    </>
  )
}

export default AdminRoute
