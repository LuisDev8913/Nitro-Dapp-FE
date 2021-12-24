import React from 'react';
import { Footer, Header } from '../Views';
import { Navigate } from 'react-router-dom';
import MainRoute from './MainRoute';
import AdminView from '../Admin/Views/AdminView';

const AdminRoute = (props) => {
  // console.log(props.isAuthenticated, " isAuthenticated")
  // if (!props.isAuthenticated) {
  //   return <Navigate   to="/" />
  // }
  return (
    <>
      <AdminView />
    </>
  )
}

export default AdminRoute
