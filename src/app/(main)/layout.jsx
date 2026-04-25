import React from 'react';
import Navbar from '../components/shared/Navbar';
import Header from '../components/shared/Header';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;