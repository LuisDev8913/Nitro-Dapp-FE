import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import useSmartContractOwner from '../../hooks/useSmartContractOwner';
import AdminView from '../Admin/Views/AdminView';
import Loading from '../Shared/Loading';

const AdminRoute = ({ isWeb3Enabled, isAuthenticated }) => {
  const { smartContractOwnerInfo } = useSmartContractOwner();

  if (!isWeb3Enabled && !isAuthenticated) {
    console.log("INSIDE THIS CONDITION***********************************")
    return <Navigate to="/" />
  }
  return (
    <>
      {
        smartContractOwnerInfo.loading === true ? <Loading /> :
          (smartContractOwnerInfo.loading === false && smartContractOwnerInfo.isCurrentUserOwner === false) ?
            <Navigate to="/" />
            :
            (smartContractOwnerInfo.loading === false && smartContractOwnerInfo.isCurrentUserOwner === true) &&
            <AdminView />
      }
    </>
  )
}

export default AdminRoute
