import React from "react";

const Button: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;