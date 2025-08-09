import {ReactNode} from 'react';

const Loading: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader"></div>
            {children && <div className="ml-4">{children}</div>}
        </div>
    );
};

export default Loading;