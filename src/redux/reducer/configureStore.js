import {createStore} from 'redux';
import reducers from './index'; 
//state veritabanı gibi düşün

export default function configureStore(){
    return createStore(reducers);
}