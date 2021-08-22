import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { UserInfoContext } from './components/provider/UserInfoProvider';

export default function App () {
  return (
    <UserInfoContext.Provider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </UserInfoContext.Provider>
    );
};