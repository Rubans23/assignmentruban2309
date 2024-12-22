import { Fragment } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth/Auth.jsx";
import Home from "./Home/Homemain/Home.jsx";
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Users from "./User/Users";
import Query from "./Query/Query";

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Navigate to="/userauthentication" />} />
                    <Route path="/userauthentication" element={<Auth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<Users />} />
                    <Route path="/query" element={<Query />} />
                </Routes>
            </Provider>
        </Fragment>
    );
}

export default App;