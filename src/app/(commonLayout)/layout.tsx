import PublicNavbar from '@/components/shared/PublicNavbar';
import React from 'react';

const CommonLayout = ({ children } : { children : React.ReactNode}) => {
    return (
        <>
            {/* navbar */}
            <PublicNavbar />
            { children }
            {/* footer */}
        </>
    );
};

export default CommonLayout;