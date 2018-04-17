import axios from 'axios';
import { CARDS } from '../constants/actionTypes';
import CONFIG from '../config';

export const fetchCards = action$ =>
  action$.ofType(CARDS.fetch)
    .switchMap(() =>
      axios.get(`${CONFIG.apiUrl}/cards?page=1&pageSize=10`)
        .then(res => ({
          type: CARDS.add,
          payload: (res.data.cards && res.data.cards.length) ? res.data.cards : [],
        }))
        .catch(() => ({
          type: CARDS.add,
          payload: [],
        })));
