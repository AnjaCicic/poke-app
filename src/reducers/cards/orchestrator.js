import axios from 'axios';
import { CARDS_FETCH } from './constants';
import { addCards } from './actions';

import CONFIG from '../../config';

export default () =>
  store =>
    next =>
      async (action) => {
        switch (action.type) {
          case CARDS_FETCH:
            next(action);

            try {
              const { data } = await axios.get(`${CONFIG.apiUrl}/cards?page=${action.payload}&pageSize=144`);

              store.dispatch(
                addCards(data.cards.map(card => ({
                  id: card.id,
                  name: card.name,
                  imageUrl: card.imageUrl,
                }))),
              );
            } catch (err) {
              console.log(err); // eslint-disable-line

              store.dispatch(addCards([]));
            }

            break;
          default:
            next(action);
        }
      };
