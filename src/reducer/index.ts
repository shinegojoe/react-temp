import { combineReducers } from 'redux'
import { translateStyleReducer } from '../reducer/translateStyle.reducer'
import { layoutReducer } from '../reducer/layout.reducer'
import { authReducer } from '../reducer/auth.reducer'
import { themeReducer } from '../reducer/theme.reducer'


const rootReducer = combineReducers({
  translateStyle: translateStyleReducer,
  layoutReducer: layoutReducer,
  authReducer: authReducer,
  themeReducer: themeReducer
})

export default rootReducer
