import {applyMiddleware, combineReducers, createStore} from 'redux'
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counterState: counterReducer
})

let preloadedState;
const persistedCounterString = localStorage.getItem('appState')

if (persistedCounterString) {
    preloadedState = JSON.parse(persistedCounterString)
}




// непосредственно создаём store
export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))
// определить автоматически тип всего объекта состояния


store.subscribe( () => {
    localStorage.setItem('appState', JSON.stringify(store.getState()))
} )




export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store