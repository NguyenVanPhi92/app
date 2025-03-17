import Image from '../assets/Image.png'
import Thumbnail from '../assets/thumbnail.jpeg'
import New1 from '../assets/images/home/new/1.jpg'
import New2 from '../assets/images/home/new/2.png'
import Expolo1 from '../assets/images/home/expoloreHCM/1.png'
import Expolo2 from '../assets/images/home/expoloreHCM/2.jpg'
import Expolo3 from '../assets/images/home/expoloreHCM/2.png'

export { Thumbnail, Image, New1, New2 }

export const timeOptions = [
  { value: '0', label: 'Check-in time' },
  { value: '08:00 AM', label: '08:00 AM' },
  { value: '09:00 AM', label: '09:00 AM' },
  { value: '10:00 AM', label: '10:00 AM' }
]

export const hoursOptions = [
  { value: '0', label: 'Hours of use' },
  { value: '1', label: '1 hour' },
  { value: '2', label: '2 hours' },
  { value: '3', label: '3 hours' }
]

export const roomOptions = [
  { value: '0', label: 'Room Quantity' },
  { value: '1', label: '1 Room' },
  { value: '2', label: '2 Rooms' },
  { value: '2', label: '2 Rooms' },
  { value: '2', label: '2 Rooms' },
  { value: '2', label: '2 Rooms' },
  { value: '2', label: '2 Rooms' },
  { value: '3', label: '3 Rooms' }
]

export const TravelSelect = [
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'hochiminh', label: 'Hồ Chí Minh' },
  { value: 'haiphong', label: 'Hải Phòng' },
  { value: 'danang', label: 'Đà Nẵng' },
  { value: 'cantho', label: 'Cần Thơ' },
  { value: 'laocai', label: 'Lào Cai' },
  { value: 'laichau', label: 'Lai Châu' },
  { value: 'haagiang', label: 'Hà Giang' },
  { value: 'caobang', label: 'Cao Bằng' },
  { value: 'sonla', label: 'Sơn La' },
  { value: 'yenbai', label: 'Yên Bái' },
  { value: 'tuyenquang', label: 'Tuyên Quang' },
  { value: 'langson', label: 'Lạng Sơn' },
  { value: 'backan', label: 'Bắc Kạn' },
  { value: 'thainguyen', label: 'Thái Nguyên' },
  { value: 'phutho', label: 'Phú Thọ' },
  { value: 'bacgiang', label: 'Bắc Giang' },
  { value: 'quangninh', label: 'Quảng Ninh' },
  { value: 'haiduong', label: 'Hải Dương' },
  { value: 'hungyen', label: 'Hưng Yên' },
  { value: 'hoabinh', label: 'Hòa Bình' },
  { value: 'bacninh', label: 'Bắc Ninh' },
  { value: 'hanam', label: 'Hà Nam' },
  { value: 'thaibinh', label: 'Thái Bình' },
  { value: 'ninhbinh', label: 'Ninh Bình' },
  { value: 'namdinh', label: 'Nam Định' },
  { value: 'thanhhoa', label: 'Thanh Hóa' },
  { value: 'nghean', label: 'Nghệ An' },
  { value: 'hatinh', label: 'Hà Tĩnh' },
  { value: 'quangbinh', label: 'Quảng Bình' },
  { value: 'quangtri', label: 'Quảng Trị' },
  { value: 'thuathienhue', label: 'Thừa Thiên Huế' },
  { value: 'quangnam', label: 'Quảng Nam' },
  { value: 'quangngai', label: 'Quảng Ngãi' },
  { value: 'binhdinh', label: 'Bình Định' },
  { value: 'phuyen', label: 'Phú Yên' },
  { value: 'khanhhoa', label: 'Khánh Hòa' },
  { value: 'ninhthuan', label: 'Ninh Thuận' },
  { value: 'binhthuan', label: 'Bình Thuận' },
  { value: 'kontum', label: 'Kon Tum' },
  { value: 'gialai', label: 'Gia Lai' },
  { value: 'daklak', label: 'Đắk Lắk' },
  { value: 'daknong', label: 'Đắk Nông' },
  { value: 'lamdong', label: 'Lâm Đồng' },
  { value: 'binhphuoc', label: 'Bình Phước' },
  { value: 'tayninh', label: 'Tây Ninh' },
  { value: 'binhduong', label: 'Bình Dương' },
  { value: 'dongnai', label: 'Đồng Nai' },
  { value: 'baria', label: 'Bà Rịa - Vũng Tàu' },
  { value: 'longan', label: 'Long An' },
  { value: 'tiengiang', label: 'Tiền Giang' },
  { value: 'bentre', label: 'Bến Tre' },
  { value: 'travinh', label: 'Trà Vinh' },
  { value: 'vinhlong', label: 'Vĩnh Long' },
  { value: 'dongthap', label: 'Đồng Tháp' },
  { value: 'angiang', label: 'An Giang' },
  { value: 'kiengiang', label: 'Kiên Giang' },
  { value: 'hậugiang', label: 'Hậu Giang' },
  { value: 'soctrang', label: 'Sóc Trăng' },
  { value: 'baclieu', label: 'Bạc Liêu' },
  { value: 'camau', label: 'Cà Mau' }
]

/// Home Page Selection
export const News = [
  {
    img: New1,
    name: 'Tan Son Nhat Terminal T3 is set to begin operations in May 2025'
  },
  {
    img: New2,
    name: 'Domestic flights of Vietnam Airlines and VietJet Air will be relocated to Terminal T3'
  },
  {
    img: New1,
    name: 'Domestic flights of Vietnam Airlines and VietJet Air will be relocated to Terminal T3'
  }
]
export const ExpoloreHCM = [
  {
    img: Expolo1,
    name: '[Concert] Brothers Overcome Thrones',
    date: '3/22/2025',
    city: 'HO CHI MINH',
    address: 'Thu Duc City, An Phu Ward, District 2, Ho Chi Minh City',
    des: 'Concert is a heartfelt musical event celebrating resilience, brotherhood, and perseverance. Featuring powerful performances from top artists, the show takes audiences on an emotional journey through music, storytelling, and inspiring visuals. Through heartfelt lyrics and dynamic stage effects, the concert honors the strength and determination to overcome life’s challenges, making it an unforgettable experience for music lovers.'
  },
  {
    img: Expolo2,
    name: 'Military Parade for the 50th Anniversary of Vietnam’s Reunification Day',
    date: '4/30/2025',
    city: 'HO CHI MINH',
    address: 'Le Duan Street, District 1, Ho Chi Minh City',
    des: 'On April 30, 2025, Ho Chi Minh City will host a grand military parade to commemorate the 50th anniversary of Vietnam’s Reunification. This event will feature military formations, marching units, and cultural performances, showcasing the nation’s unity, strength, and progress since reunification in 1975. High-ranking officials, veterans, and citizens will gather to honor this historic milestone, reflecting on Vietnam’s journey of resilience and development.'
  },
  {
    img: Expolo3,
    name: '7 Firework Venues Honoring the 50th Reunification Day',
    date: '3/22/2025',
    city: 'HO CHI MINH',
    address: 'Ho Chi Minh City',
    des: 'To commemorate the 50th anniversary of Vietnam’s Reunification, Ho Chi Minh City will hold a grand fireworks display at seven key locations on April 30, 2025. The fireworks will be launched from the Saigon River Tunnel area (Thu Duc City), Ben Duoc Martyrs Memorial (Cu Chi District), Nga Ba Giong Martyrs Memorial (Hoc Mon District), Lang Le - Bau Co Historic Site (Binh Chanh District), Can Gio District Football Field, National History and Culture Park, and Dam Sen Cultural Park. This large-scale event will create a dazzling spectacle for residents and visitors, celebrating five decades of resilience, unity, and national progress.'
  }
]

export const SelectTerminal = [
  { value: '1', label: 'Domestic Arrival Terminal' },
  { value: '2', label: 'Domestic Departure Terminal' },
  { value: '3', label: 'International Arrival Terminal' },
  { value: '4', label: 'International Departure Terminal' }
]

export const SelectLanguage = [
  { value: '1', label: 'Vietnamese' },
  { value: '2', label: 'English' },
  { value: '3', label: 'Chinese' },
  { value: '4', label: 'Korean' },
  { value: '5', label: 'Japanese' }
]

export const SelectMoney = [
  { value: '1', label: 'VND' },
  { value: '2', label: 'USA' }
]
