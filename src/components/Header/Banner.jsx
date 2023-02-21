import * as React from 'react';
import banner from '../../assets/img/banner.jpg';
import './Banner.css';

export const Banner = () => {
    return (
    <div className='banner'>
        <img className='banner_img' src={banner} alt=""></img>
    </div>
    )
}



