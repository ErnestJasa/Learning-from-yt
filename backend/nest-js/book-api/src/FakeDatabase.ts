export interface Book {
  id: number;
  author: string;
  title: string;
  year: number;
}

export const books: Book[] = [
  {
    id: 1,
    author: 'Chinua Achebe',
    title: 'Things Fall Apart',
    year: 1958,
  },
  {
    id: 2,
    author: 'Hans Christian Andersen',
    title: 'Fairy tales',
    year: 1836,
  },
  {
    id: 3,
    author: 'Dante Alighieri',
    title: 'The Divine Comedy',
    year: 1315,
  },
  {
    id: 4,
    author: 'Unknown',
    title: 'The Epic Of Gilgamesh',
    year: -1700,
  },
  {
    id: 5,
    author: 'Unknown',
    title: 'The Book Of Job',
    year: -600,
  },
  {
    id: 6,
    author: 'Unknown',
    title: 'One Thousand and One Nights',
    year: 1200,
  },
  {
    id: 7,
    author: 'Unknown',
    title: "Nj's Saga",
    year: 1350,
  },
  {
    id: 8,
    author: 'Jane Austen',
    title: 'Pride and Prejudice',
    year: 1813,
  },
  {
    id: 9,
    author: 'Honor de Balzac',
    title: 'Le Pure Goriot',
    year: 1835,
  },
  {
    id: 10,
    author: 'Samuel Beckett',
    title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
    year: 1952,
  },
];
