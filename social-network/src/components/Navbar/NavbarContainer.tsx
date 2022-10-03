import React from 'react';
import {NavbarContainerType} from '../Types/Types';
import {Navbar} from './Navbar';

export const NavbarContainer = (props: NavbarContainerType) => {
    return <Navbar sidebar={props.store.getState().sidebar}/>
}

