import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import './App.css';
import MainRoute from './components/Routes/MainRoute';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import AdminRoute from './components/Routes/AdminRoute';
import { RouteNames } from './constants/routeNames';
// const App = () => {
//   const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

//   useEffect(() => {
//     if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isAuthenticated, isWeb3Enabled]);
//   console.log("isWeb3Enabled", isWeb3Enabled)
//   return (
//     <>

//       <Routes>
//         <Route path="/" element={<MainRoute />} />
//         <Route path="admin" element={<AdminRoute />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

const App = ({ isWeb3Enabled, isAuthenticated }) => {
  let routes = useRoutes([
    { path: "/", element: <MainRoute /> },
    { path: "/admin/*", element: <AdminRoute isWeb3Enabled={isWeb3Enabled} isAuthenticated={isAuthenticated} /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <Router>
      <App isWeb3Enabled={isWeb3Enabled} isAuthenticated={isAuthenticated} />
    </Router>
  );
};

export default AppWrapper;