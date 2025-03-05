import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate();
    const handleClickLogout = () => {
        // TODO handleClickLogout
        alert('Logout');
        return navigate("/");
    }
    return (
        <div>
            <ProfileData/>
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;