import React from 'react';
import { Navigate } from 'react-router';
import useSmartContractOwner from '../../hooks/useSmartContractOwner';
import AdminView from '../Admin/Views/AdminView';
import Loading from '../Shared/Loading';

const AdminRoute = (props) => {
  const { smartContractOwnerInfo } = useSmartContractOwner();
  return (
    <AdminView />
  )
  return (
    <>
      {
        smartContractOwnerInfo.loading === true ? <Loading /> :
          smartContractOwnerInfo.loading === false && smartContractOwnerInfo.isCurrentUserOwner === false ?
            <Navigate to="/" />
            :
            <AdminView />
      }
    </>
  )
}

export default AdminRoute
