import React from 'react';
import {NavbarMapDispatchToPropsType, NavbarMapStateToPropsType} from '../Types/Types';
import {Navbar} from './Navbar';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';




export const mapStateToProps = (state: ReduxStoreType): NavbarMapStateToPropsType => {
    return {
        sidebar: state.sidebar

    }
}
export const mapDispatchToProps = (dispatch: Dispatch): NavbarMapDispatchToPropsType => {
    return {}

}


export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);


