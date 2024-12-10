// import house images
import House1 from './assets/img/SINGLE1.webp';
import House2 from './assets/img/SINGLE2.jpg';
import House3 from './assets/img/BED1.webp';
import House4 from './assets/img/BED2.webp';
import House5 from './assets/img/SINGLE3.webp';
import House6 from './assets/img/BED3.jpeg';
import House7 from './assets/img/BED10NEW.webp';
import House8 from './assets/img/SINGLE6.webp';
import House9 from './assets/img/BED6.jpg';
import House10 from './assets/img/SINGLE7.webp';
import House11 from './assets/img/BED7.jpg';
import House12 from './assets/img/SINGLE8.webp';
// import house large images
import House1Lg from './assets/img/SINGLE1.webp';
import House2Lg from './assets/img/SINGLE2.jpg';
import House3Lg from './assets/img/BED1.webp';
import House4Lg from './assets/img/BED2.webp';
import House5Lg from './assets/img/SINGLE3.webp';
import House6Lg from './assets/img/BED3.jpeg';
import House7Lg from './assets/img/BED10NEW.webp';
import House8Lg from './assets/img/SINGLE6.webp';
import House9Lg from './assets/img/BED6.jpg';
import House10Lg from './assets/img/SINGLE7.webp';
import House11Lg from './assets/img/BED7.jpg';
import House12Lg from './assets/img/SINGLE8.webp';

// import apartments images
import Apartment1 from './assets/img/7SINGLENEW.webp';
import Apartment2 from './assets/img/BED4.jpeg';
import Apartment3 from './assets/img/SINGLE5.webp';
import Apartment4 from './assets/img/BED16NEW2.png';
import Apartment5 from './assets/img/SINGLE9.webp';
import Apartment6 from './assets/img/BED18NEW.webp';
// import apartments large images
import Apartment1Lg from './assets/img/7SINGLENEW.webp';
import Apartment2Lg from './assets/img/BED4.jpeg';
import Apartment3Lg from './assets/img/SINGLE5.webp';
import Apartment4Lg from './assets/img/BED16NEW2.png';
import Apartment5Lg from './assets/img/SINGLE9.webp';
import Apartment6Lg from './assets/img/BED18NEW.webp';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'This stunning modern house is situated in a serene suburban neighborhood, offering a perfect blend of contemporary design and comfortable living. The exterior features clean lines, large windows, and a minimalist aesthetic, creating a striking and sophisticated appeal.',
    image: House1,
    imageLg: House1Lg,
    country: 'Nagpur',
    address: '724 Sarojini Nagar Market',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Single Bed',
    year: '2016',
    price: '14000',
    agent: {
      image: Agent1,
      name: 'Shreya Sharma',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'As you approach the house, you are greeted by a beautifully landscaped front yard, complete with manicured gardens and a paved driveway leading to the attached garage. The entrance is adorned with a sleek wooden door, welcoming you into a world of modern elegance.',
    image: House2,
    imageLg: House2Lg,
    country: 'Pune',
    address: '798 Hiranandani Gardens NJ 08807',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Single Bed',
    year: '2016',
    price: '12000',
    agent: {
      image: Agent2,
      name: 'Ajay Verma',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Outside, you will find a beautifully landscaped backyard with a patio area ideal for outdoor dining and entertaining. The yard is spacious enough for various activities and offers privacy, thanks to well-placed fencing and lush greenery.',
    image: House3,
    imageLg: House3Lg,
    country: 'Pune',
    address: '2 Jubilee Hills , VA 22304',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Double Bed',
    year: '2016',
    price: '13000',
    agent: {
      image: Agent3,
      name: 'Akash Jha',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'As for amenities, this house is conveniently located near several amenities. Within a short distance, you will find shopping centers, restaurants, parks, and recreational facilities. The neighborhood also provides easy access to schools, medical facilities, and major transportation routes, making daily commutes a breeze.',
    image: House4,
    imageLg: House4Lg,
    country: 'Pune',
    address: '84 Park Street , FL 32927',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Double Bed',
    year: '2016',
    price: '15000',
    agent: {
      image: Agent4,
      name: 'Saniya Iyer',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'This stunning modern house is situated in a serene suburban neighborhood, offering a perfect blend of contemporary design and comfortable living. The exterior features clean lines, large windows, and a minimalist aesthetic, creating a striking and sophisticated appeal.',
    image: House5,
    imageLg: House5Lg,
    country: 'Mumbai',
    address: '28 MG Road PA 18974',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Single Bed',
    year: '2016',
    price: ' 12000',
    agent: {
      image: Agent5,
      name: 'Palash Jain',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'As you approach the house, you are greeted by a beautifully landscaped front yard, complete with manicured gardens and a paved driveway leading to the attached garage. The entrance is adorned with a sleek wooden door, welcoming you into a world of modern elegance.',
    image: House6,
    imageLg: House6Lg,
    country: 'Mumbai',
    address: '32 Pawnee Street , MT 59701',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Double Bed',
    year: '2016',
    price: ' 13000',
    agent: {
      image: Agent6,
      name: 'Siya Patil',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Apartment 1',
    description:
      'Outside, you will find a beautifully landscaped backyard with a patio area ideal for outdoor dining and entertaining. The yard is spacious enough for various activities and offers privacy, thanks to well-placed fencing and lush greenery.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Nagpur',
    address: '32 Brigade Road, MT 59701',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Single Bed',
    year: '2016',
    price: '14000',
    agent: {
      image: Agent7,
      name: 'Rajesh Sharma',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Apartment 2',
    description:
      'As for amenities, this house is conveniently located near several amenities. Within a short distance, you will find shopping centers, restaurants, parks, and recreational facilities. The neighborhood also provides easy access to schools, medical facilities, and major transportation routes, making daily commutes a breeze.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Nagpur',
    address: '28 Anna Salai , PA 18974',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Double Bed',
    year: '2016',
    price: '15000',
    agent: {
      image: Agent8,
      name: 'Shahenaz Sheikh',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartment',
    name: 'Apartment 3',
    description:
      'This stunning modern house is situated in a serene suburban neighborhood, offering a perfect blend of contemporary design and comfortable living. The exterior features clean lines, large windows, and a minimalist aesthetic, creating a striking and sophisticated appeal.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Nagpur',
    address: '84 Linking Road , FL 32927',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Single Bed',
    year: '2016',
    price: '12000',
    agent: {
      image: Agent9,
      name: 'Sanket Mishra',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'As you approach the house, you are greeted by a beautifully landscaped front yard, complete with manicured gardens and a paved driveway leading to the attached garage. The entrance is adorned with a sleek wooden door, welcoming you into a world of modern elegance.',
    image: House7,
    imageLg: House7Lg,
    country: 'Mumbai',
    address: '7240C  Ashokwan Road ',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Double Bed',
    year: '2016',
    price: '13000',
    agent: {
      image: Agent10,
      name: 'Saujanya Yelmule',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Outside, you will find a beautifully landscaped backyard with a patio area ideal for outdoor dining and entertaining. The yard is spacious enough for various activities and offers privacy, thanks to well-placed fencing and lush greenery.',
    image: House8,
    imageLg: House8Lg,
    country: 'Pune',
    address: '798 Hill Road St Maker , NJ 08807',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Single Bed',
    year: '2016',
    price: '14000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'As for amenities, this house is conveniently located near several amenities. Within a short distance, you will find shopping centers, restaurants, parks, and recreational facilities. The neighborhood also provides easy access to schools, medical facilities, and major transportation routes, making daily commutes a breeze.',
    image: House9,
    imageLg: House9Lg,
    country: 'Pune',
    address: '2 Hazratganj , VA 22304',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Double Bed',
    year: '2016',
    price: '15000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'This stunning modern house is situated in a serene suburban neighborhood, offering a perfect blend of contemporary design and comfortable living. The exterior features clean lines, large windows, and a minimalist aesthetic, creating a striking and sophisticated appeal.',
    image: House10,
    imageLg: House10Lg,
    country: 'Mumbai',
    address: '84 DLF Phase 1 , FL 32927',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Single Bed',
    year: '2016',
    price: '12000',
    agent: {
      image: Agent1,
      name: 'Sneha Sood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'As you approach the house, you are greeted by a beautifully landscaped front yard, complete with manicured gardens and a paved driveway leading to the attached garage. The entrance is adorned with a sleek wooden door, welcoming you into a world of modern elegance.',
    image: House11,
    imageLg: House11Lg,
    country: 'Pune',
    address: '28 Gandhi Nagar, PA 18974',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Double Bed',
    year: '2016',
    price: '13000',
    agent: {
      image: Agent2,
      name: 'John Mool',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Outside, you will find a beautifully landscaped backyard with a patio area ideal for outdoor dining and entertaining. The yard is spacious enough for various activities and offers privacy, thanks to well-placed fencing and lush greenery.',
    image: House12,
    imageLg: House12Lg,
    country: 'Mumbai',
    address: '32 Ashok Vihar, MT 59701',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Single Bed',
    year: '2016',
    price: '14000',
    agent: {
      image: Agent3,
      name: 'Xavier Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartment',
    name: 'Apartment 16',
    description:
      'As for amenities, this house is conveniently located near several amenities. Within a short distance, you will find shopping centers, restaurants, parks, and recreational facilities. The neighborhood also provides easy access to schools, medical facilities, and major transportation routes, making daily commutes a breeze.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Nagpur',
    address: '32 Shalimar Bagh, MT 59701',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Double Bed',
    year: '2016',
    price: '15000',
    agent: {
      image: Agent4,
      name: 'Ketki Mishra',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartment',
    name: 'Apartment 17',
    description:
      'This stunning modern house is situated in a serene suburban neighborhood, offering a perfect blend of contemporary design and comfortable living. The exterior features clean lines, large windows, and a minimalist aesthetic, creating a striking and sophisticated appeal.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Pune',
    address: '28 Malviya Nagar, Park St PA 18974',
    wifi: 'Wifi Available',
    food: 'Food Not Available',
    bed: 'Single Bed',
    year: '2016',
    price: '12000',
    agent: {
      image: Agent5,
      name: 'Sanjay Rajput',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartment',
    name: 'Apartment 18',
    description:
      'As for amenities, this house is conveniently located near several amenities. Within a short distance, you will find shopping centers, restaurants, parks, and recreational facilities. The neighborhood also provides easy access to schools, medical facilities, and major transportation routes, making daily commutes a breeze.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Mumbai',
    address: '84 Nehru Street, FL 32927',
    wifi: 'Wifi Available',
    food: 'Food Available',
    bed: 'Double Bed',
    year: '2016',
    price: '15000',
    agent: {
      image: Agent6,
      name: 'Keerti Sharma',
      phone: '0123 456 78910',
    },
  },
];
