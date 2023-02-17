import React, {useEffect, useState} from "react";
import {getCurrentUser, login, logout} from "../services/AuthService";

const MenuPanel = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const loginUser = (): void => {
        login("user@email.com", "user");
        setIsAuth(true);
    }

    const logoutUser = () => {
        logout();
        setIsAuth(false);
    }

    useEffect(() => {
        const user = getCurrentUser();
        user.email ? setIsAuth(true) : setIsAuth(false);
    }, [])

    return(
        <div className="menuPanel">
            {
                isAuth ? (
                    <div>
                        <button className="authBtn" onClick={logoutUser}>logout</button>
                    </div>
                ) : (
                    <div>
                        <button className="authBtn" onClick={loginUser}>login</button>
                    </div>
                )
            }
        </div>
    )
}

export default MenuPanel