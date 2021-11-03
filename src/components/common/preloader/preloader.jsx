import React from 'react';
import preloader from '../../../assets/images/preloader.gif'

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} width='70' height='70' alt="" />
        </div>
    )
}
export default Preloader;