import axios from 'axios';
import { DETAILS } from '../constants/actionTypes';
import CONFIG from '../config';

export const fetchDetails = action$ =>
  action$.ofType(DETAILS.fetch)
    .switchMap(action =>
      axios.get(`${CONFIG.apiUrl}/cards/${action.payload}`)
        .then(res => ({
          type: DETAILS.add,
          payload: res.data.card,
        }))
        .catch(() => ({
          type: DETAILS.add,
          payload: {},
        })));
