import {login, logout} from "../services/AuthService";
import Button from "./Button";
import {UserStatus, useUserStatus} from "../context";

const MenuPanel = () => {
    const { userStatus, setUserStatus } = useUserStatus();

    const loginUser = (): void => {
        login("user@email.com", "user");
        setUserStatus(UserStatus.LoggedIn);
    }

    const logoutUser = () => {
        logout();
        setUserStatus(UserStatus.LoggedOff);
    }

    return(
        <div className="menuPanel">
            {
                userStatus == UserStatus.LoggedIn ? (
                    <div>
                        <Button color={"#9fa846"} bColor={"#b5bd68"} onClick={() => {
                            logoutUser();
                        }}>
                            logout
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button color={"#6990b1"} bColor={"#81a2be"} onClick={() => {
                            loginUser();
                        }}>
                            login
                        </Button>
                    </div>
                )
            }
        </div>
    )
}

export default MenuPanel