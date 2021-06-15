import React from "react";

export default function SocialButton(props) {
    const classes = ['btn-social']
    if (props.type) {
        classes.push(props.type)
    }
    console.log(JSON.stringify(props));
    return (
        <>
            <button className={classes.reduce((a, b) => `${a} ${b}`)} style={{
            }}></button>
        </>
    )
}
