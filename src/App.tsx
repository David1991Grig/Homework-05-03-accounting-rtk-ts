import './App.css'
import Guest from "./components/Guest";
import Profile from "./components/Profile";
import {Navigate, Route, Routes} from "react-router";

function App() {
        const token = '';


    return (
        <Routes>
            <Route path="/" element={<Guest/>} />
            {token ? (
                <Route path="/profile" element={<Profile />} />
            ) : (
                <Route path="/profile" element={<Navigate to="/" />} />
            )}
            </Routes>
    )
}

export default App
