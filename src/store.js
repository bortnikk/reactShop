import { createStore } from 'redux'
import rootReducer from '../src/redux/reducer/index'

const store = createStore(rootReducer)

export default store