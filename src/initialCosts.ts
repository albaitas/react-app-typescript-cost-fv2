import { ICost } from './types';

export const initialCosts: ICost[] = [
  {
    id: 1,
    title: 'Table',
    price: 110,
    date: new Date(2023, 2, 16)
  },
  {
    id: 2,
    title: 'Monitor',
    price: 200,
    date: new Date(2022, 11, 12)
  },
  {
    id: 3,
    title: 'Computer',
    price: 600,
    date: new Date(2022, 8, 18)
  }
];
