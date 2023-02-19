import React from "react";

interface Props {
    color: string;
    bColor: string;

    children?: React.ReactNode;
    onClick: () => void;
}

const Button = ({color, bColor, children, onClick}: Props) => {
    const btnStyle = {
        border: "5px solid" + bColor,
        backgroundColor: color,
    };

    return (
        <button className="customBtn" style={btnStyle} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button