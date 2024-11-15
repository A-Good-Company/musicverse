import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
    const location = useLocation();
    const { link } = location.state || {};

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Next Page</h1>
            {link ? (
                <p>Link provided: <a href={link} target= "_blank" rel="noopener noreferrer">{link}</a></p>
            ) :(
                <p>No link provided.</p>
            )}
        </div>
    );
};

export default NextPage;
