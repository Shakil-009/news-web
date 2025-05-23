import React from 'react';
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playGroundImage from "../../assets/playground.png";
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className="flex flex-col justify-center items-center space-y-5">
                <img src={swimmingImage} alt="" /><img src={classImage} alt="" /><img src={playGroundImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;