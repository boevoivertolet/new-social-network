import React from 'react';
import {ProviderType, StoreType} from './components/Types/Types';


 const StoreContext = React.createContext({} as StoreType);

 const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;
