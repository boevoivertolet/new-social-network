import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {AppRedux} from './AppRedux';
import {StateType} from './components/Types/Types';
import {Provider} from 'react-redux';
import {store} from './components/ReduxStore/ReduxStore';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppRedux/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);



// const rerenderEntireTree = (state: StateType) => {
//
// }

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
