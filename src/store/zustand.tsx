import { create } from 'zustand'

type State = {
  login: { email: string; password: string }
  register: {}
  travel: { id: string; categories: any[] }
  resting: {
    name: string
    location: string
    time: string
    about: string
    tag: string
    img: string
  }
  shopping: {}
  diningStore: {
    name: string
    location: string
    time: string
    desc: string
    tag: string
    img: string
  }
  bookingTravel: { name: string; city: string; date_from: string; date_to: string }
  cart: { img: string; name: string; price: string }[]
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
  dispathTravel: (event: { id: string; categories: any[] }) => void
  dispathTravelBooking: (event: { name: string; city: string; date_from: string; date_to: string }) => void
  dispathCart: (event: { img: string; name: string; price: string }) => void
  dispathDiningStore: (event: {
    name: string
    location: string
    time: string
    desc: string
    tag: string
    img: string
  }) => void
  dispathResting: (event: {
    name: string
    location: string
    time: string
    about: string
    tag: string
    img: string
  }) => void
}

export const useStoreAction = create<State & Actions>((set) => ({
  login: { email: '', password: '' },
  register: {},
  travel: { id: '', categories: [] },
  bookingTravel: { name: '', city: '', date_from: '', date_to: '' },
  resting: { name: '', location: '', time: '', about: '', tag: '', img: '' },
  diningStore: {
    name: '',
    location: '',
    time: '',
    desc: '',
    tag: '',
    img: ''
  },
  cart: [],
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
    })),
  dispathTravel: (value: { id: string; categories: any[] }) =>
    set((state) => ({
      travel: {
        ...state.travel,
        categories: value.categories,
        id: value.id
      }
    })),
  dispathCart: (value: { img: string; name: string; price: string }) =>
    set((state) => ({
      cart: [...state.cart, value]
      // cart: state.cart.map((item) => (item.name === value.name ? { ...item, ...value } : item))
    })),
  dispathTravelBooking: (value: { name: string; city: string; date_from: string; date_to: string }) =>
    set((state) => ({
      bookingTravel: {
        ...state.bookingTravel,
        name: value.name,
        city: value.city,
        date_from: value.date_from,
        date_to: value.date_to
      }
    })),
  dispathDiningStore: (value: {
    name: string
    location: string
    time: string
    desc: string
    tag: string
    img: string
  }) =>
    set((state) => ({
      diningStore: {
        ...state.diningStore,
        name: value.name,
        location: value.location,
        time: value.time,
        desc: value.desc,
        tag: value.tag,
        img: value.img
      }
    })),
  dispathResting: (value: { name: string; location: string; time: string; about: string; tag: string; img: string }) =>
    set((state) => ({
      resting: {
        ...state.resting,
        name: value.name,
        location: value.location,
        time: value.time,
        about: value.about,
        tag: value.tag,
        img: value.img
      }
    }))
}))
