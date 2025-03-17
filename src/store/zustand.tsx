import { create } from 'zustand'

type State = {
  login: { email: string; password: string }
  register: {}
  travel: {}
  shopping: {}
  event: {
    img: any
    name: string
    date: string
    city: string
    address: string
    des: string
  }
  home: {
    country: string
    language: string
    money: string
  }
}

type Actions = {
  choose: (home: { country: string; language: string; money: string }) => void
  dispathEvent: (event: { img: any; name: string; date: string; city: string; address: string; des: string }) => void
  dispathLogin: (event: { email: string; password: string }) => void
}

export const useStoreAction = create<State & Actions>((set) => ({
  login: { email: '', password: '' },
  register: {},
  travel: {},
  shopping: {},
  event: {
    img: '',
    name: '',
    date: '',
    city: '',
    address: '',
    des: ''
  },
  home: {
    country: '',
    language: '',
    money: ''
  },
  choose: (value: { country: string; language: string; money: string }) =>
    set((state) => ({
      home: {
        ...state.home,
        country: value.country,
        language: value.language,
        money: value.money
      }
    })),
  dispathEvent: (value: { img: any; name: string; date: string; city: string; address: string; des: string }) =>
    set((state) => ({
      event: {
        ...state.event,
        img: value.img,
        name: value.name,
        date: value.date,
        city: value.city,
        address: value.address,
        des: value.des
      }
    })),
  dispathLogin: (value: { email: string; password: string }) =>
    set((state) => ({
      login: {
        ...state.login,
        email: value.email,
        password: value.password
      }
    }))
}))
