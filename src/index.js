import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import 'antd/dist/antd.css';
import DappContextProvider from './providers/ContextProvider';
const APP_ID = "kPslPHPExdWLrIsjdkVTzHCsEWUiVmrxItZOoMb0";
const SERVER_URL = "https://rp5ffungvs7r.usemoralis.com:2053/server";

const Application = () => {
  // const isServerInfo = APP_ID && SERVER_URL ? true : false;
  const isServerInfo = true;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <DappContextProvider>
          <App isServerInfo />
        </DappContextProvider>
      </MoralisProvider>
    );
  else {
    return (
      < >
        <App />
      </>
    );
  }
};


ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
