import { createStore } from 'redux';
import reducer from '../reducers/app';

// ここでloggerやmiddlewareなどをかませる
export default function configureStore() {
    const store = createStore(reducer);
    return store;
}
