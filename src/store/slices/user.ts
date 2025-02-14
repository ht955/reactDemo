
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface UserState {
  userInfo: Object,
  token: string
}
const initialState: UserState = {
  userInfo: {},
  token: ''
}


export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
  },
})

export const { setUserInfo, setToken } = userSlice.actions
export default userSlice.reducer