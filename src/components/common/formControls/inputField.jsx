import React from "react";
import classes from "./inputField.module.css"

export const MyTextarea = ({input, meta, ...props}) => {
    
    return (
        <div className={classes.formControl + ' ' + (meta.touched && meta.error ? classes.error : '')}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>

    )
};

export const MyInput = ({input, meta, ...props}) => {
    
    return (
        <div className={classes.formControl + ' ' + (meta.touched && meta.error ? classes.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>

    )
};