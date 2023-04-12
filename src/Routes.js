import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Scoring from "./Scoring";
import Profile from "./Profile";
import Scheduling from "./Scheduling";

export default function PathRoutes( { currUser }) {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path ="/home" element={<Home/>} />
            <Route path="/scoring" element={<Scoring/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/scheduling" element={<Scheduling/>} />
        </Routes>
    );
}