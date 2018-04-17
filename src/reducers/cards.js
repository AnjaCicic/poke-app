import { CARDS, SORT } from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case CARDS.fetch:
      return [];
    case CARDS.add:
      return payload;
    case SORT.change:
      switch (payload) {
        case 'id':
          return state.sort((a, b) => a.id > b.id);
        case 'hpAscending':
          return state.sort((a, b) => {
            if (a.hp === 'None') return 1;
            if (b.hp === 'None') return -1;

            return parseInt(a.hp, 10) > parseInt(b.hp, 10);
          });
        case 'hpDescending':
          return state.sort((a, b) => {
            if (a.hp === 'None') return 1;
            if (b.hp === 'None') return -1;

            return parseInt(a.hp, 10) < parseInt(b.hp, 10);
          });
        default:
          return state;
      }
    default:
      return state;
  }
};
