import React, { useState, useEffect } from 'react';

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("event listner added")
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('evnet listner removed')
        };
    }, []); // Empty dependency array means it runs once on mount

    return (
        <div>
            <h1>Window width: {windowWidth}</h1>
        </div>
    );
}

export default ResizeComponent;