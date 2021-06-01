import React from 'react';

const CenterDiv = (props) => {    
    return (
        <div style={{
            color: "white",
            background: props.background, 
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 90px)",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {props.children}
        </div>
    )
}



export default CenterDiv;