import React, { useState } from "react";

const Box = (props) => {
    const { bColor } = props

    const myStyle = {
        backgroundColor: bColor,
        width: 200,
        height: 200,
        margin: "30px",
        display: "inline-block",

    }


    return (
        <div style={myStyle}>
            <p className='boxText'>{bColor}</p>

        </div>
    )



}






export default Box;