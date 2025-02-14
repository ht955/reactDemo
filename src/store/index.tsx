import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import rootReducer from './reducer'
//配置持久化设置
const persistConfig = {
  key: 'root',//存储的键名
  storage,//持久化存储的引擎
  // whitelist:[]
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false//关闭默认的序列化检查
  })
})

export const persistor = persistStore(store);

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch  = typeof store.dispatch