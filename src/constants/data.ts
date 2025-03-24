import Image from '../assets/Image.png'
import Expolo1 from '../assets/images/home/expoloreHCM/1.png'
import Expolo2 from '../assets/images/home/expoloreHCM/2.jpg'
import Expolo3 from '../assets/images/home/expoloreHCM/2.png'
import New1 from '../assets/images/home/new/1.jpg'
import New2 from '../assets/images/home/new/2.png'
import Travel1 from '../assets/images/travel/1.jpg'
import Event1 from '../assets/images/travel/eventHCM/1.jpg'
import Event10 from '../assets/images/travel/eventHCM/10.jpg'
import Event2 from '../assets/images/travel/eventHCM/2.jpg'
import Event3 from '../assets/images/travel/eventHCM/3.jpg'
import Event4 from '../assets/images/travel/eventHCM/4.jpg'
import Event5 from '../assets/images/travel/eventHCM/5.jpg'
import Event6 from '../assets/images/travel/eventHCM/6.jpg'
import Event7 from '../assets/images/travel/eventHCM/7.jpg'
import Event8 from '../assets/images/travel/eventHCM/8.jpg'
import Event9 from '../assets/images/travel/eventHCM/9.jpg'
import Thumbnail from '../assets/thumbnail.jpeg'
import arrival1 from '../assets/images/flightTracking/arrival/1.png'
import arrival2 from '../assets/images/flightTracking/arrival/2.jpg'
import arrival3 from '../assets/images/flightTracking/arrival/3.jpg'
import Event11 from '../assets/images/travel/eventHCM/11.jpg'
import Event12 from '../assets/images/travel/eventHCM/12.jpg'
import Event13 from '../assets/images/travel/eventHCM/13.jpg'
import Event14 from '../assets/images/travel/eventHCM/14.jpg'
import Event15 from '../assets/images/travel/eventHCM/15.jpg'
import Event16 from '../assets/images/travel/eventHCM/16.jpg'
import Event17 from '../assets/images/travel/eventHCM/17.jpg'
import Event18 from '../assets/images/travel/eventHCM/18.jpg'
import Event19 from '../assets/images/travel/eventHCM/19.jpg'
import Event20 from '../assets/images/travel/eventHCM/20.jpg'
import Event21 from '../assets/images/travel/eventHCM/21.jpg'
import Event22 from '../assets/images/travel/eventHCM/22.jpg'
import Bag from '../assets/icons/home/Bag'
import Banking from '../assets/icons/home/Banking'
import Car from '../assets/icons/home/Car'
import Currency from '../assets/icons/home/Currency'
import DiningIcon from '../assets/icons/home/Dining'
import Feedback from '../assets/icons/home/Feedback'
import First from '../assets/icons/home/First'
import Flight from '../assets/icons/home/Flight'
import Hotel from '../assets/icons/home/Hotel'
import Lost from '../assets/icons/home/Lost'
import Lounge from '../assets/icons/home/Lounge'
import Map from '../assets/icons/home/Map'
import Ride from '../assets/icons/home/Ride'
import Shopping from '../assets/icons/home/Shopping'
import Sim from '../assets/icons/home/Sim'
import Travel from '../assets/icons/home/Travel'
import TravelPlan1 from '../assets/images/travel/plan/1.jpg'
import TravelPlan2 from '../assets/images/travel/plan/2.jpg'
import TravelPlan3 from '../assets/images/travel/plan/3.jpg'
import TravelPlan4 from '../assets/images/travel/plan/4.jpg'
import TravelPlan5 from '../assets/images/travel/plan/5.jpg'
import TravelPlan6 from '../assets/images/travel/plan/6.png'
import TravelPlan7 from '../assets/images/travel/plan/7.jpg'
import TravelPlan8 from '../assets/images/travel/plan/8.jpg'
import TravelPlan9 from '../assets/images/travel/plan/9.jpg'
import LoginI from '../assets/login.jpg'
import LightTracking from '../assets/images/flightTracking.jpg'

export { Image, LoginI, New1, New2, Thumbnail, Travel1, LightTracking }

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

// Home
export const IconHome = [
  { name: 'Flight Tracking', icon: Flight, path: '/flight' },
  { name: 'Smart Travel', icon: Travel, path: '/one' },
  { name: 'Lounge & Rest', icon: Lounge, path: '/' },
  { name: 'Dining', icon: DiningIcon, path: '/dining' },
  { name: 'Shopping', icon: Shopping, path: '/' },
  { name: 'Ride Hailing', icon: Ride, path: '/' },
  { name: 'Car Rental', icon: Car, path: '/' },
  { name: 'Maps', icon: Map, path: '/map' },
  { name: 'Hotel Booking', icon: Hotel, path: '/' },
  { name: 'Lost & Found', icon: Lost, path: '/' },
  { name: 'Baggage', icon: Bag, path: '/' },
  { name: 'Feedback', icon: Feedback, path: '/feedback' },
  { name: 'First-Aid', icon: First, path: '/' },
  { name: 'ATM/Banking', icon: Banking, path: '/' },
  { name: 'eSIM', icon: Sim, path: '/' },
  { name: 'Currency Exchange', icon: Currency, path: '/' }
]

// Travel
export const TravelSelect = [
  { value: 'HCM', label: 'Hồ Chí Minh' },
  { value: 'HN', label: 'Hà Nội' },
  { value: 'haiphong', label: 'Hải Phòng' },
  { value: 'DN', label: 'Đà Nẵng' },
  { value: 'CT', label: 'Cần Thơ' },
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

export const TravelCate = [
  {
    id: 'HCM',
    name: 'Hồ Chí Minh',
    cate: [
      {
        id: 'HC',
        name: 'Historical & Cultural',
        event: [''],
        detination: ''
      },
      {
        id: 'CA',
        name: 'Colonial Architecture'
      },
      {
        id: 'AC',
        name: 'Arts & Creativity'
      },
      {
        id: 'SM',
        name: 'Shopping & Markets'
      },
      {
        id: 'CL',
        name: 'Cityscape & Landmarks'
      },
      {
        id: 'NB',
        name: 'Nightlife & Bars'
      },
      {
        id: 'FE',
        name: 'Foodie Experience'
      },

      {
        id: 'CH',
        name: 'Café Hopping'
      },
      {
        id: 'NP',
        name: 'Nature & Parks'
      },
      {
        id: 'EE',
        name: 'Entertainment & Events'
      }
    ]
  },
  {
    id: 'CT',
    name: 'Cần Thơ',
    cate: [
      {
        id: 'FMRL',
        name: 'Floating Markets & River Life'
      },
      {
        id: 'EI',
        name: 'Eco-Tourism & Islets'
      },
      {
        id: 'FFLC',
        name: 'Folk Festivals & Local Culture '
      },
      {
        id: 'FE',
        name: 'Foodie Experience'
      },
      {
        id: 'SM',
        name: 'Shopping & Markets'
      }
    ]
  },
  {
    id: 'HN',
    name: 'Hà Nội',
    cate: [
      {
        id: 'HC',
        name: 'Historical & Cultural'
      },
      {
        id: 'CA',
        name: 'Colonial Architecture'
      },
      {
        id: 'OTSL',
        name: 'Old Town & Street Life'
      },
      {
        id: 'AVTH',
        name: 'Ancient Villages & Traditional Handicrafts'
      },
      {
        id: 'NB',
        name: 'Nightlife & Bars'
      },
      {
        id: 'FE',
        name: 'Foodie Experience'
      },
      {
        id: 'CH',
        name: 'Café Hopping'
      },
      {
        id: 'NP',
        name: 'Nature & Parks'
      },
      {
        id: 'SM',
        name: 'Shopping & Markets'
      },
      {
        id: 'EE',
        name: 'Entertainment & Events'
      }
    ]
  },
  {
    id: 'DN',
    name: 'Đà Nẵng',
    cate: [
      {
        id: 'BC',
        name: 'Beach & Coastal'
      },
      {
        id: 'HC',
        name: 'Historical & Cultural'
      },
      {
        id: 'CL',
        name: 'Cityscape & Landmarks'
      },
      {
        id: 'RWR',
        name: 'Resorts & Wellness Retreats '
      },
      {
        id: 'NB',
        name: 'Nightlife & Bars'
      }
    ]
  }
]

export const Event_HCM = [
  {
    id: 'HC',
    name: 'Historical & Cultural',
    event: [
      {
        id: 'MPAVRD',
        img: Event1,
        name: 'Military Parade for the 50th Anniversary of Vietnam’s Reunification Day',
        city: 'HO CHI MINH',
        address: 'Le Duan Street, District 1, Ho Chi Minh City',
        date: '4/30/2025',
        desc: 'On April 30, 2025, Ho Chi Minh City will host a grand military parade to commemorate the 50th anniversary of Vietnam’s Reunification. This event will feature military formations, marching units, and cultural performances, showcasing the nation’s unity, strength, and progress since reunification in 1975. High-ranking officials, veterans, and citizens will gather to honor this historic milestone, reflecting on Vietnam’s journey of resilience and development.'
      }
    ]
  },
  {
    id: 'EE',
    name: 'Entertainment & Events',
    event: [
      {
        id: 'CBOT',
        img: Event2,
        name: '[Concert] Brothers Overcome Thrones ',
        city: 'HO CHI MINH',
        address: 'Thu Duc City, An Phu Ward, District 2, Ho Chi Minh City',
        date: '3/22/2025',
        desc: 'Concert is a heartfelt musical event celebrating resilience, brotherhood, and perseverance. Featuring powerful performances from top artists, the show takes audiences on an emotional journey through music, storytelling, and inspiring visuals. Through heartfelt lyrics and dynamic stage effects, the concert honors the strength and determination to overcome life’s challenges, making it an unforgettable experience for music lovers.'
      },
      {
        id: 'MBST',
        img: Event3,
        name: '[Minishow] B.U.I STORIES - Trung Quân & Bùi Anh Tuấn',
        city: 'HO CHI MINH',
        address: 'Ben Thanh Theater, Ben Nghe Ward, District 1, Ho Chi Minh City',
        date: '4/10/2025',
        desc: 'B.U.I STORIES is a special concert featuring the soulful voices of Trung Quân and Bùi Anh Tuấn, two of Vietnam’s most beloved vocalists. This event brings fans on an emotional journey through their signature ballads, heartfelt storytelling, and powerful live performances. With a carefully curated setlist, stunning stage design, and an intimate atmosphere, B.U.I STORIES promises an unforgettable night filled with music, nostalgia, and deep emotions.'
      }
    ]
  },
  {
    id: 'HC',
    name: 'Historical & Cultural ',
    event: [
      {
        id: '7DVH',
        img: Event4,
        name: '7 Firework Venues Honoring the 50th Reunification Day',
        city: 'HO CHI MINH',
        address: 'Ho Chi Minh City',
        date: '4/30/2025',
        desc: 'To commemorate the 50th anniversary of Vietnam’s Reunification, Ho Chi Minh City will hold a grand fireworks display at seven key locations on April 30, 2025. The fireworks will be launched from the Saigon River Tunnel area (Thu Duc City), Ben Duoc Martyrs Memorial (Cu Chi District), Nga Ba Giong Martyrs Memorial (Hoc Mon District), Lang Le - Bau Co Historic Site (Binh Chanh District), Can Gio District Football Field, National History and Culture Park, and Dam Sen Cultural Park. This large-scale event will create a dazzling spectacle for residents and visitors, celebrating five decades of resilience, unity, and national progress.'
      }
    ]
  },
  {
    id: 'NP',
    name: 'Nature & Parks',
    event: [
      {
        id: '3HCMPF',
        img: Event5,
        name: '3rd Ho Chi Minh City Orchid Festival 2025',
        city: 'HO CHI MINH',
        address: 'Tao Dan Park, District 1, Ho Chi Minh City',
        date: 'April 29 - May 3 2025',
        desc: 'Held biennially, the festival celebrates the city’s orchid brand and key ornamental plant products while promoting urban agricultural tourism. It aims to create an attractive destination for both domestic and international visitors, encouraging longer stays in Ho Chi Minh City. Guests can explore OCOP and signature agricultural products from the city and other provinces, enjoy tourism showcases, discover various orchid and ornamental plant species, and experience cultural performances along with many exciting activities.'
      }
    ]
  },
  {
    id: 'CH',
    name: 'Café Hopping',
    event: [
      {
        id: 'VICS',
        img: Event6,
        name: "Vietnam Int'l Cafe Show 2025",
        city: 'HO CHI MINH',
        address: 'SECC, 799 Nguyen Van Linh Boulevard, District 7, Ho Chi Minh City',
        date: 'April 17 - April 19 2025',
        desc: "The 10th Vietnam Int'l Cafe Show 2025 is expected to attract over 35,000 industry professionals, including top experts in procurement, hospitality management, F&B chains, supermarkets, convenience stores, and distributors from Vietnam and worldwide. With more than 600 booths representing over 100 leading coffee brands, the exhibition will showcase a wide range of categories, including coffee, tea, beverages, bakery, ingredients, barista equipment, hospitality, desserts, café interiors, franchising, and startups."
      }
    ]
  }
]

export const DESTINATION_HCM = [
  {
    id: 'HC',
    name: 'Historical & Cultural',
    event: [
      {
        id: 'IP',
        img: Event7,
        name: 'Independence Palace',
        city: 'HO CHI MINH',
        address: '135 Nam Ky Khoi Nghia, District 1, Ho Chi Minh City',
        time: '8:00 AM - 4:30 PM',
        desc: 'The Independence Palace, also known as the Reunification Palace, is a symbol of Vietnam’s history and political transition. This landmark played a crucial role in the Vietnam War, as it was the site where the war officially ended on April 30, 1975. Visitors can explore its well-preserved meeting rooms, secret underground bunkers, and a rooftop where a historic helicopter is displayed. The architecture reflects 1960s modernist design, combining open space with symbolic elements of Vietnamese culture. Today, it serves as both a museum and a venue for important government events.'
      },
      {
        id: 'WRM',
        img: Event8,
        name: 'War Remnants Museum',
        city: 'HO CHI MINH',
        address: '28 Vo Van Tan, District 3, Ho Chi Minh City',
        time: '7:30 AM - 5:30 PM',
        desc: "The War Remnants Museum provides a powerful and emotional insight into the Vietnam War from the Vietnamese perspective. It houses an extensive collection of war artifacts, military equipment, and disturbing photographs that showcase the war's impact on civilians. Outside, visitors can see preserved U.S. fighter jets, tanks, and a replica of a prison cell used during wartime. The museum also highlights the long-term effects of Agent Orange and unexploded ordnance on Vietnam’s landscape and people. While intense, it is a must-visit for those looking to understand Vietnam’s history beyond textbooks."
      },
      {
        id: 'HCMCM',
        img: Event9,
        name: 'Ho Chi Minh City Museum',
        city: 'HO CHI MINH',
        address: '65 Ly Tu Trong, District 1, Ho Chi Minh City',
        time: '8:00 AM - 5:00 PM',
        desc: "Housed in a grand colonial-era building, the Ho Chi Minh City Museum offers a deep dive into the city's rich history. The museum features exhibits on the Vietnam War, the struggle for independence, and the cultural evolution of Saigon. Its elegant French architecture and well-preserved interiors make it a visual treat for history and architecture enthusiasts. Visitors can explore artifacts, photographs, and dioramas that bring Saigon’s past to life. The museum also has a beautiful courtyard with vintage war vehicles, making it an insightful and picturesque destination."
      }
    ]
  },
  {
    id: 'CA',
    name: 'Colonial Architecture ',
    event: [
      {
        id: 'SNC',
        img: Event10,
        name: 'Saigon Notre-Dame Cathedral',
        city: 'HO CHI MINH',
        address: '1 Cong Xa Paris, District 1, Ho Chi Minh City',
        time: '8:00 AM - 5:00 PM',
        desc: "Built in the late 19th century by the French, Saigon Notre-Dame Cathedral is one of Ho Chi Minh City's most iconic landmarks. The cathedral's red bricks were imported from France, giving it a distinct European aesthetic in the middle of the bustling city. It features twin bell towers, stunning stained-glass windows, and a peaceful courtyard with a statue of the Virgin Mary. Despite being surrounded by modern skyscrapers, it remains a place of worship and an architectural reminder of Vietnam’s colonial past. Currently, the cathedral is under renovation, but visitors can still admire its grandeur from the outside."
      },
      {
        id: 'SCPO',
        img: Event11,
        name: 'Saigon Central Post Office',
        city: 'HO CHI MINH',
        address: '2 Cong Xa Paris, District 1, Ho Chi Minh City',
        time: '7:00 AM - 7:00 PM',
        desc: 'Designed by Gustave Eiffel, the Saigon Central Post Office is a stunning example of French colonial architecture. With its bright yellow facade, intricate ironwork, and arched windows, it looks like a grand European railway station. Inside, the building retains its vintage charm, with high ceilings, wooden phone booths, and a large portrait of Ho Chi Minh hanging above the hall. Visitors can still send letters from here, making it both a historical site and a functioning post office. Souvenir shops inside sell beautiful postcards and old Vietnamese stamps, perfect for collectors.'
      }
    ]
  },
  {
    id: 'AC',
    name: 'Arts & Creativity',
    event: [
      {
        id: 'HCMCMFA',
        img: Event12,
        name: 'Ho Chi Minh City Museum of Fine Arts',
        city: 'HO CHI MINH',
        address: '97 Pho Duc Chinh, District 1, Ho Chi Minh City',
        time: '8:00 AM - 5:00 PM',
        desc: 'Housed in a grand colonial-era mansion, the Ho Chi Minh City Museum of Fine Arts is a hidden gem showcasing Vietnam’s artistic heritage. The museum features an extensive collection of traditional Vietnamese paintings, sculptures, and contemporary artworks. Visitors can explore three floors of exhibits, including ancient Cham artifacts, wartime propaganda posters, and modern pieces by local artists. The building itself is a masterpiece, blending French colonial architecture with Eastern design elements such as colorful tiles and stained-glass windows. With its peaceful courtyard and art-filled galleries, it is a must-visit for those interested in Vietnam’s rich cultural and artistic history.'
      }
    ]
  },
  {
    id: 'SM',
    name: 'Shopping & Markets',
    event: [
      {
        id: 'SM',
        img: Event13,
        name: 'Ben Thanh Market',
        city: 'HO CHI MINH',
        address: 'Le Loi, District 1, Ho Chi Minh City',
        time: '6:00 AM - 6:00 PM',
        desc: 'Ben Thanh Market is one of Ho Chi Minh City’s most iconic landmarks, offering a vibrant shopping and cultural experience. The market is a bustling hub where visitors can find everything from traditional Vietnamese handicrafts and textiles to fresh produce and souvenirs. Food lovers can sample local delicacies such as pho, banh xeo, and fresh seafood at the numerous street food stalls. The lively atmosphere, bargaining culture, and diverse selection make it a must-visit spot for tourists. In the evening, the market transforms into a lively night bazaar with a variety of dining options.'
      },
      {
        id: 'SC',
        img: Event14,
        name: 'Saigon Centre',
        city: 'HO CHI MINH',
        address: '65 Le Loi, District 1, Ho Chi Minh City',
        time: '9:30 AM - 10:00 PM',
        desc: 'Saigon Centre is a modern shopping complex featuring international brands, luxury boutiques, and a diverse range of dining options. Home to Takashimaya, the high-end Japanese department store, it offers a premium shopping experience with designer fashion, cosmetics, and lifestyle products. The mall also boasts a large food court with a mix of Asian and Western cuisine, catering to all tastes. With its sleek architecture and central location, Saigon Centre is a popular destination for both leisure and business travelers. The mall’s spacious layout and elegant ambiance make shopping here a pleasurable experience.'
      }
    ]
  },
  {
    id: 'CL',
    name: 'Cityscape & Landmarks',
    event: [
      {
        id: 'L81',
        img: Event15,
        name: 'Landmark 81',
        city: 'HO CHI MINH',
        address: '720A Dien Bien Phu, Binh Thanh District, Ho Chi Minh City',
        time: '8:00 AM - 10:00 PM',
        desc: "As the tallest skyscraper in Vietnam, Landmark 81 dominates the Ho Chi Minh City skyline with its futuristic design. The building houses a luxurious shopping mall, fine-dining restaurants, a sky-high observation deck, and a five-star hotel. Visitors can enjoy breathtaking panoramic views of the city from the observation deck on the upper floors. The surrounding Vinhomes Central Park provides a scenic spot for relaxation and leisure activities. Whether for shopping, dining, or sightseeing, Landmark 81 is a must-visit for those looking to experience Ho Chi Minh City's modern side."
      },
      {
        id: 'BT',
        img: Event16,
        name: 'Bitexco Tower',
        city: 'HO CHI MINH',
        address: '36 Ho Tung Mau, District 1, Ho Chi Minh City',
        time: '9:30 AM - 9:30 PM',
        desc: "The Bitexco Financial Tower’s Sky Deck offers one of the best panoramic views of Ho Chi Minh City. Located on the 49th floor, it provides visitors with a 360-degree perspective of the city's skyline and the winding Saigon River. The tower’s distinctive lotus-inspired design makes it an architectural highlight of the city. Inside, visitors can explore an interactive exhibit detailing Ho Chi Minh City’s history and urban development. The deck is especially stunning at sunset, making it a favorite spot for photography and sightseeing."
      },
      {
        id: 'NHWS',
        img: Event17,
        name: 'Nguyen Hue Walking Street',
        city: 'HO CHI MINH',
        address: 'Nguyen Hue, District 1, Ho Chi Minh City',
        time: 'Open 24 hours',
        desc: 'Nguyen Hue Walking Street is a vibrant pedestrian boulevard in the heart of Ho Chi Minh City. By day, it is a popular meeting spot surrounded by colonial buildings, high-end restaurants, and charming cafés. By night, the street transforms into an entertainment hub, with street performers, musicians, and dazzling city lights creating a lively atmosphere. The area is home to iconic landmarks such as the Ho Chi Minh City People’s Committee Building and The Café Apartments, a unique vertical café hub. Special events, parades, and cultural festivals often take place here, making it a must-visit for both locals and tourists.'
      }
    ]
  },
  {
    id: 'NB',
    name: 'Nightlife & Bars',
    event: [
      {
        id: 'BVWS',
        img: Event18,
        name: 'Bui Vien Walking Street',
        city: 'HO CHI MINH',
        address: 'Bui Vien Street, District 1, Ho Chi Minh City',
        time: 'Open 24 hours',
        desc: "The heart of Ho Chi Minh City's nightlife, this bustling street is lined with lively bars, clubs, and street performers. It's famous for its energetic atmosphere, cheap drinks, and international crowd. Whether you're looking for a laid-back beer or a wild night out, Bui Vien offers a range of entertainment options."
      }
    ]
  },
  {
    id: 'NP',
    name: 'Nature & Parks',
    event: [
      {
        id: 'TDP',
        img: Event19,
        name: 'Tao Dan Park',
        city: 'HO CHI MINH',
        address: 'Nguyen Thi Minh Khai, District 1, Ho Chi Minh City',
        time: 'Open 24 hours',
        desc: "A green oasis in the heart of the city, Tao Dan Park is perfect for morning walks, exercise, or simply unwinding. The park features beautiful gardens, a small temple, and bird cafés where locals gather to showcase their songbirds. It's a peaceful retreat amidst the urban chaos."
      },
      {
        id: 'TDPZBG',
        img: Event20,
        name: 'Tao Dan ParkSaigon Zoo & Botanical Gardens',
        city: 'HO CHI MINH',
        address: '2B Nguyen Binh Khiem, District 1, Ho Chi Minh City',
        time: '7:00 AM – 5:30 PM',
        desc: "One of the oldest zoos in the world, Thảo Cầm Viên is home to a diverse range of animals and a lush botanical garden. It's a favorite spot for families and nature lovers looking to enjoy a peaceful escape within the city. The park also features historical architecture and educational exhibits about wildlife conservation."
      }
    ]
  },
  {
    id: 'EE',
    name: 'Entertainment & Events',
    event: [
      {
        id: 'SOH',
        img: Event21,
        name: 'Saigon Opera House',
        city: 'HO CHI MINH',
        address: '7 Lam Son Square, District 1, Ho Chi Minh Ciy',
        time: '8:00 AM - 10:00 PM',
        desc: 'A stunning French colonial building hosting cultural performances, including traditional Vietnamese opera and contemporary concerts. Visitors can enjoy a world-class artistic experience while admiring the historic beauty of this architectural gem.'
      },
      {
        id: 'DSP',
        img: Event22,
        name: 'Dam Sen Park',
        city: 'HO CHI MINH',
        address: '3 Hoa Binh, District 11, Ho Chi Minh City',
        time: '08:00 AM – 06:00 PM',
        desc: 'Dam Sen Park is one of the largest and most popular amusement parks in Ho Chi Minh City, offering a blend of cultural, recreational, and water activities. The park features over 40 thrilling rides, including roller coasters, a giant Ferris wheel, and a 4D cinema, making it a perfect destination for families and adventure seekers. It also has a beautifully landscaped garden with a lake, a bird sanctuary, and an orchid garden, providing a relaxing escape within the bustling city. The adjacent Dam Sen Water Park offers a variety of water slides, wave pools, and lazy rivers for those looking to cool off from the tropical heat. With its diverse attractions, Dam Sen Park is an exciting spot for both locals and tourists looking for entertainment in Ho Chi Minh City.'
      }
    ]
  }
]

// Travel Plan
export const TravelPlan = [
  {
    name: 'Day 1',
    date: '3/22/2025',
    plan: 'First day at Ho Chi Minh City',
    event: [
      {
        date: '4/29/2025',
        time: '5:00:00 PM',
        des: 'Saigon Notre-Dame Cathedral',
        address: '1 Cong Xa Paris, District 1',
        img: TravelPlan1
      },
      {
        date: '4/29/2025',
        time: '7:00:00 PM',
        des: 'Saigon Central Post Office',
        address: '2 Cong Xa Paris, District 1',
        img: TravelPlan2
      },
      {
        date: '4/29/2025',
        time: '8:00:00 PM',
        des: 'Dinner time',
        address: '',
        img: Image
      },
      {
        date: '4/29/2025',
        time: '4:00:00 PM',
        des: 'Landmark 81',
        address: '720A Dien Bien Phu, Binh Thanh District',
        img: TravelPlan3
      }
    ]
  },
  {
    name: 'Day 2',
    date: '4/30/2025',
    plan: "50th Anniversary of Viet Nam's Reunification Day",
    event: [
      {
        date: '4/30/2025',
        time: '7:00:00 AM',
        des: 'Military Parade for the 50th Anniversary of Vietnam’s Reunification Day',
        address: 'Le Duan Street, District 1',
        img: TravelPlan4
      },
      {
        date: '4/30/2025',
        time: '12:00:00 PM',
        des: 'Lunch time',
        address: '',
        img: Image
      },
      {
        date: '4/30/2025',
        time: '1:00:00 PM',
        des: 'War Remnants Museum',
        address: '28 Vo Van Tan, District 3',
        img: TravelPlan5
      },
      {
        date: '4/30/2025',
        time: '6:00:00 PM',
        des: 'Sunset on the Saigon River',
        address: 'Ton Duc Thang, District 1',
        img: TravelPlan6
      },
      {
        date: '4/30/2025',
        time: '7:00:00 PM',
        des: 'Dinner time',
        address: '',
        img: Image
      },
      {
        date: '4/30/2025',
        time: '9:00:00 PM',
        des: 'Nguyen Hue Walking Street',
        address: 'Nguyen Hue, District 1',
        img: TravelPlan7
      },
      {
        date: '4/30/2025',
        time: '11:00:00 PM',
        des: 'Fireworks at Bach Dang Wharf',
        address: '2 Ton Duc Thang, District 1',
        img: TravelPlan8
      }
    ]
  },
  {
    name: 'Day 3',
    date: '5/1/2025',
    plan: 'A slower pace to enjoy nature ',
    event: [
      {
        date: '4/29/2025',
        time: '7:00:00 PM',
        des: 'Saigon Zoo & Botanical Garden',
        address: '2B Nguyen Binh Khiem, District 1, Ho Chi Minh City',
        img: TravelPlan9
      },
      {
        date: '4/29/2025',
        time: '12:00:00 PM',
        des: 'Lunch time',
        address: '',
        img: Image
      },
      {
        date: '4/29/2025',
        time: '3:00:00 PM',
        des: 'Heading to Tan Son Nhat Airport for the 5:00 PM Flight to San Francisco.',
        address: '',
        img: Image
      }
    ]
  }
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
  { value: '0', label: 'English' },
  { value: '1', label: 'Vietnamese' },
  { value: '2', label: 'Chinese' },
  { value: '3', label: 'Korean' },
  { value: '4', label: 'Japanese' }
]

export const SelectMoney = [
  { value: '0', label: 'USD' },
  { value: '1', label: 'VND' }
]

export const TimeSelect = [
  { value: '0', label: 'Time' },
  { value: '1', label: 'VND' },
  { value: '2', label: 'USA' }
]
export const GuestSelect = [
  { value: '0', label: 'Guest' },
  { value: '1', label: 'VND' },
  { value: '2', label: 'USA' }
]

// Menu
export const MenuStore = [
  {
    id: '1',
    img: 'https://www.vietnamairlines.com/vn/vi/images/airline-logo/vn.png',
    name: 'Vietnam Airlines 1',
    price: 1233
  },
  {
    id: '2',
    img: 'https://www.vietnamairlines.com/vn/vi/images/airline-logo/vn.png',
    name: 'Vietnam Airlines 2',
    price: 34234
  },
  {
    id: '3',
    img: 'https://www.vietnamairlines.com/vn/vi/images/airline-logo/vn.png',
    name: 'Vietnam Airlines 4',
    price: 5345
  },
  {
    id: '4',
    img: 'https://www.vietnamairlines.com/vn/vi/images/airline-logo/vn.png',
    name: 'Vietnam Airlines 5',
    price: 1234
  },
  {
    id: '5',
    img: 'https://www.vietnamairlines.com/vn/vi/images/airline-logo/vn.png',
    name: 'Vietnam Airlines 6',
    price: 6432
  },
  {
    id: '6',
    img: 'https://www.vietnamairlines.com/vn/vi/images/airline-logo/vn.png',
    name: 'Vietnam Airlines 7',
    price: 4746
  }
]

// Services
export const optionTagTerminal = [
  { id: 1, name: 'TERMINAL 1' },
  { id: 2, name: 'TERMINAL 2' },
  { id: 3, name: 'CAFÉ' },
  { id: 4, name: 'QUICK BITES' }
]

// Flight Tracking
export const FlightTrackingArrival = [
  {
    flight_time: '4:00 PM',
    estimated_time: '4:30 PM',
    terminal: 1,
    gate: 6,
    from_code: 'DAD',
    from_name: 'Da Nang',
    to_code: 'SGN',
    to_name: 'Ho Chi Minh',
    airlines: 'Vietnam Airlines',
    img: arrival1,
    flight_code: 'VN651'
  },
  {
    flight_time: '4:15 PM',
    estimated_time: '4:30 PM',
    terminal: 2,
    gate: 7,
    from_code: 'SIN',
    from_name: 'Singapore',
    to_code: 'SGN',
    to_name: 'Ho Chi Minh',
    airlines: 'Vietjet Air',
    img: arrival2,
    flight_code: 'VJ813'
  },
  {
    flight_time: '4:15 PM',
    estimated_time: '4:30 PM',
    terminal: 1,
    gate: 8,
    from_code: 'HAN',
    from_name: 'Ha Noi',
    to_code: 'SGN',
    to_name: 'Ho Chi Minh',
    airlines: 'Vietjet Air',
    img: arrival3,
    flight_code: 'VJ123'
  },
  {
    flight_time: '4:20 PM',
    estimated_time: '4:30 PM',
    terminal: 1,
    gate: 9,
    from_code: 'TBB',
    from_name: 'Tuy Hoa',
    to_code: 'SGN',
    to_name: 'Ho Chi Minh',
    airlines: 'Vietjet Air',
    img: arrival2,
    flight_code: 'VJ786'
  },
  {
    flight_time: '4:30 PM',
    estimated_time: '4:35 PM',
    terminal: 2,
    gate: 2,
    from_code: 'PEK',
    from_name: 'Beijing',
    to_code: 'SGN',
    to_name: 'Ho Chi Minh',
    airlines: 'Vietnam Airlines',
    img: arrival1,
    flight_code: 'VN631'
  }
]

export const FlightTrackingDeparture = [
  {
    flight_time: '4:00 PM',
    estimated_time: '6:00 PM',
    terminal: 2,
    gate: 6,
    from_code: 'SGN',
    from_name: 'Ho Chi Minh',
    to_code: 'SFO',
    to_name: 'San Francisco',
    airlines: 'Vietnam Airlines',
    img: arrival1,
    flight_code: 'VN614'
  },
  {
    flight_time: '4:15 PM',
    estimated_time: '4:30 PM',
    terminal: 2,
    gate: 7,
    from_code: 'SGN',
    from_name: 'Ho Chi Minh',
    to_code: 'SIN',
    to_name: 'Singapore',
    airlines: 'Vietnam Airlines',
    img: arrival1,
    flight_code: 'VN789'
  },
  {
    flight_time: '4:15 PM',
    estimated_time: '4:30 PM',
    terminal: 1,
    gate: 8,
    from_code: 'SGN',
    from_name: 'Ho Chi Minh',
    to_code: 'HAN',
    to_name: 'Ha Noi',
    airlines: 'Vietjet Air',
    img: arrival2,
    flight_code: 'VJ126'
  },
  {
    flight_time: '5:00 PM',
    estimated_time: '4:30 PM',
    terminal: 2,
    gate: 9,
    from_code: 'SGN',
    from_name: 'Ho Chi Minh',
    to_code: 'PEK',
    to_name: 'Beijing',
    airlines: 'Vietnam Airlines',
    img: arrival1,
    flight_code: 'VN654'
  },
  {
    flight_time: '6:15 PM',
    estimated_time: '6:30 AM',
    terminal: 1,
    gate: 2,
    from_code: 'SGN',
    from_name: 'Ho Chi Minh',
    to_code: 'SGN',
    to_name: 'Ho Chi Minh',
    airlines: 'Vietjet Air',
    img: arrival2,
    flight_code: 'VJ123'
  }
]
