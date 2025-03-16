import { create } from 'zustand'

type State = {
  login: {}
  register: {}
  travel: {}
  shopping: {}
  home: {
    country: string
    language: string
    money: string
  }
}

type Actions = {
  choose: (home: { country: string; language: string; money: string }) => void
}

export const useStoreAction = create<State & Actions>((set) => ({
  login: {},
  register: {},
  travel: {},
  shopping: {},
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
    }))
}))
