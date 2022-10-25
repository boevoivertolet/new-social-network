import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {HeaderContainerType, HeaderMapStateToPropsType} from '../Types/Types';
import {connect} from 'react-redux';
import {setAuthUserData} from '../Reducers/authReducer';
import {setIsFetching} from '../Reducers/authReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';


class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
         this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            this.props.setIsFetching(false)
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data)
            }

        })
    }


    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: ReduxStoreType): HeaderMapStateToPropsType=> {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth.data
    }


}

export default connect(mapStateToProps, {setAuthUserData, setIsFetching})(HeaderContainer);