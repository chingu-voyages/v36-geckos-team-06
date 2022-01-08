/* eslint-disable prettier/prettier */
export const LANDLORD = {
  id: 'landlord-0123',
  name: 'sammie blue',
  email: 'sammie.blue@icloud.com',
};

export const PROPERTY_DATA = [
  {
    id: 'palm-springs-444',
    name: 'palm springs',
    address: '5 palm spring road, luton',
    postcode: 'L432DH',
    capacity: 100,
    propertyImage: 'https://ucarecdn.com/bf7bc147-a50f-45fb-8620-d618fbae3c43/propertyImage.webp',
    roomImage: 'https://ucarecdn.com/5898ef18-15ca-436c-85d4-a23f2b6a3dbc/roomImage.webp',
    rooms: [
      {
        id: 'palm-springs-room-01',
        name: 'room 1',
        occupant: {
          name: 'rose smith',
          phoneNumber: '08095432145',
          email: 'rose.smith@yahoo.com',
        },
        available: false,
        moveInDate: new Date('December 30, 2021 03:24:00'),
        moveOutDate: new Date('December 30, 2022 03:24:00'),
        charges: {
          water: '400',
          rent: '3000',
          electricity: '150',
          parking: '75',
        },
      },
      {
        id: 'palm-springs-room-02',
        name: 'room 2',
        occupant: {
          name: 'wes boss',
          phoneNumber: '090675543221',
          email: 'wes.boss@icloud.com',
        },
        available: true,
        moveInDate: new Date('July 10, 2021 03:24:00'),
        moveOutDate: new Date('July 10, 2022 03:24:00'),
        charges: {
          water: '600',
          rent: '4000',
          electricity: '250',
          parking: '95',
        },
      },
      {
        id: 'palm-springs-room-03',
        name: 'room 3',
        occupant: {
          name: 'jon may',
          phoneNumber: '0745634123',
          email: 'jon.may@icloud.com',
        },
        available: true,
        moveInDate: new Date('May 22, 2021 03:24:00'),
        moveOutDate: new Date('May 22, 2022 03:24:00'),
        charges: {
          water: '100',
          rent: '1000',
          electricity: '150',
          parking: '195',
        },
      },
      {
        id: 'palm-springs-room-04',
        name: 'room 4',
        occupant: {
          name: 'kola octa',
          phoneNumber: '0789554321',
          email: 'kola.octa@icloud.com',
        },
        available: true,
        moveInDate: new Date('April 24, 2021 03:24:00'),
        moveOutDate: new Date('April 24, 2022 03:24:00'),
        charges: {
          water: '300',
          rent: '5000',
          electricity: '250',
          parking: '395',
        },
      },
    ],
  },
];

export const REPAIR_DATA = [
  {
    id: 'repair-r-01',
    property: 'palm springs',
    room: 'room 1',
    occupant: {
      name: 'rose smith',
      email: 'rose.smith@yahoo.com',
    },
    issue: 'leaking pipe',
    details: 'The pipe is leaking, it as been dripping for weeks, please come fix it immediately',
    status: 'reported',
  },
  {
    id: 'repair-r-02',
    property: 'palm springs',
    room: 'room 1',
    occupant: {
      name: 'rose smith',
      email: 'rose.smith@yahoo.com',
    },
    issue: 'broken tv',
    details:
      'the tv just random;y stopped working, please can someone do something about it, thank you',
    status: 'on-going',
  },
  {
    id: 'repair-r-03',
    property: 'palm springs',
    room: 'room 2',
    occupant: {
      name: 'wes boss',
      email: 'wes.boss@icloud.com',
    },
    issue: 'broken kitchen sink',
    details: 'the kitchen sink is broken, can someone do something about it, thank you',
    status: 'reported',
  },
  {
    id: 'repair-r-04',
    property: 'palm springs',
    room: 'room 3',
    occupant: {
      name: 'jon may',
      email: 'jon.may@icloud.com',
    },
    issue: 'weird smell',
    details: 'there is a weird smell coming from the toilet and it is not my shit',
    status: 'fixed',
  },
];