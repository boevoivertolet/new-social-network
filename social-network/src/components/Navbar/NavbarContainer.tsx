import React from 'react';
import {
    NavbarContainerType, NavbarMapDispatchToPropsType, NavbarMapStateToPropsType,
    StateType,
    StoreType
} from '../Types/Types';
import {Navbar} from './Navbar';
import StoreContext from '../../StoreContext';
import {Dispatch} from 'redux';

import {connect} from 'react-redux';


// export const NavbarContainer = (props: NavbarContainerType) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store:StoreType) => {
//                     return <Navbar sidebar={store.getState().sidebar}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }
//
//

export const mapStateToProps = (state: StateType): NavbarMapStateToPropsType => {
    return {
        sidebar: state.sidebar

    }
}
export const mapDispatchToProps = (dispatch: Dispatch): NavbarMapDispatchToPropsType => {
    return {}

}


export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);


