import preloader from '../../assets/images/preloader.svg';
import React from 'react';
import {PreloaderType} from '../Types/Types';


export const Preloader = (props: PreloaderType) => {
    return <div><img src={preloader}/></div>
}