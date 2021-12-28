import React from 'react';
import { Navigate } from 'react-router';
import useSmartContractOwner from '../../hooks/useSmartContractOwner';
import AdminView from '../Admin/Views/AdminView';
import Loading from '../Shared/Loading';

const AdminRoute = (props) => {
  const { smartContractOwnerInfo } = useSmartContractOwner()
  return (
    <>
      {
        smartContractOwnerInfo.loading ? <Loading /> :
          smartContractOwnerInfo.loading && !smartContractOwnerInfo.isCurrentUserOwner ?
            <Navigate to="/" />
            : <AdminView />
      }
    </>
  )
}

export default AdminRoute
