import { cardData } from './cardData';

export const cardDataSort = ( category) => {
  const sortData = cardData.filter((card) => card.category === category);
  return sortData;
};
