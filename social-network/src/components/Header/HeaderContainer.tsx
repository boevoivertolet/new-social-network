import React from 'react';
import {Header} from './Header';
import {HeaderContainerType, HeaderMapStateToPropsType} from '../Types/Types';
import {connect} from 'react-redux';
import {getAuthUserData} from '../Reducers/authReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }


    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: ReduxStoreType): HeaderMapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth
    }


}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
