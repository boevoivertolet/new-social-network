import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {AppRedux} from './AppRedux';
import store from './components/ReduxStore/ReduxStore';
import {StateType} from './components/Types/Types';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateType) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <BrowserRouter>
                    <AppRedux/>
                </BrowserRouter>
            </StoreContext.Provider>

        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
