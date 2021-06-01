import React from 'react';

const CenterDiv = ({children}) => {
    return (
        <div style={{
            fontFamily: "sans-serif",
            color: "white",
            background: "#f37272", 
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {children}
        </div>
    )
}

export default CenterDiv;