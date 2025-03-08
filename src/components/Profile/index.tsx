import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {deleteToken} from "../../features/slice/tokenSlice.ts";
import {useAppDispatch} from "../../app/hooks.ts";
import {deleteUser} from "../../features/slice/userSlice.ts";

const Profile = () => {
    const dispatch = useAppDispatch();
    const handleClickLogout = () => {
        dispatch(deleteToken())
        dispatch(deleteUser())
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