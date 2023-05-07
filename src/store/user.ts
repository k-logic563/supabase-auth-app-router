import { atom } from "nanostores";

type LoginUser = {
  id: string | undefined
  email: string | undefined
}

export const loginUser = atom<LoginUser>({ id: undefined, email: undefined })

export const updateLoginUser = (user: LoginUser) => {
  loginUser.set(user)
}
