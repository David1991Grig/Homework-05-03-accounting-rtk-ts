import {useState} from "react";
import {changePassword} from "../../features/api/accountApi.ts";
import {useAppDispatch} from "../../app/hooks.ts";
import {createTokenPassword, extractPasswordFromToken} from "../../utils/constants.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const token = useSelector((state: RootState) => state.token);

    const handleClickSave = () => {
        if (confirmPassword === newPassword && oldPassword === extractPasswordFromToken(token)) {
            dispatch(changePassword(createTokenPassword(newPassword)));
            alert('Save new password successfully!');
        }else if (oldPassword !== extractPasswordFromToken(token)){
            alert('old password is incorrect');
        }
        else {
            alert('New password and confirm new password are different');
        }
        close();
    }

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <label>Old password:
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
            </label>
            <label>New Password:
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <label>Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;