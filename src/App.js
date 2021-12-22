import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import './App.css';
import MainRoute from './components/Routes/MainRoute';

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  console.log("isWeb3Enabled", isWeb3Enabled)
  return (
    <>
      <MainRoute />
    </>
  );
}

export default App;
