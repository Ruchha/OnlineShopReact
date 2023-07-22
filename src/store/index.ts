import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import { userAPI } from '../services/UserService'
import { reviewsAPI } from '../services/ReviewsService'

const rootReducer = combineReducers({
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [reviewsAPI.reducerPath]: reviewsAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat([
      userAPI.middleware,
      reviewsAPI.middleware
    ])
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];