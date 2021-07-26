import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { addCharactersById } from './actions/index';

const store = createStore(rootReducer);
// console.log('store.getState()', store.getState());
// store.subscribe(() => console.log('store.getState()', store.getState()))
// store.dispatch(addCharactersById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));