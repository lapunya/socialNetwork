import React, { useEffect, useState } from 'react';
import classes from './profileInfo.module.css';

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let changeStatus = (el) => {
        setStatus(el.target.value);
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onClick={activateEditMode} className={classes.statusSpan}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={changeStatus} onBlur={deactivateEditMode} autoFocus type="text" value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusHooks;