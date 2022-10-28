import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {HeaderContainerType, HeaderMapStateToPropsType} from '../Types/Types';
import {connect} from 'react-redux';
import {setAuthUserData} from '../Reducers/authReducer';
import {setIsFetching} from '../Reducers/authReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {getAuthMe} from '../../api/api';


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        getAuthMe().then(data => {
            this.props.setIsFetching(false)
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data)
            }

        })
    }


    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: ReduxStoreType): HeaderMapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth.data
    }


}

export default connect(mapStateToProps, {setAuthUserData, setIsFetching})(HeaderContainer);