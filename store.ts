import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './slices/likeCounterSlice'
import searchReducer from './slices/SearchSlice'

export const store = configureStore({
  reducer: {
    like: likeReducer,
    search: searchReducer,
   
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//export Wrapper for redux

