import React from 'react';
import {NavbarContainerType, StoreType} from '../Types/Types';
import {Navbar} from './Navbar';
import StoreContext from '../../StoreContext';

export const NavbarContainer = (props: NavbarContainerType) => {
    return (
        <StoreContext.Consumer>
            {
                (store:StoreType) => {
                    return <Navbar sidebar={store.getState().sidebar}/>
                }
            }

        </StoreContext.Consumer>

    )
}

