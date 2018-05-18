import axios from 'axios';
import { DETAILS_FETCH } from './constants';
import { addDetails } from './actions';

import CONFIG from '../../config';

export default () =>
  store =>
    next =>
      async (action) => {
        switch (action.type) {
          case DETAILS_FETCH:
            next(action);

            try {
              const { data } = await axios.get(`${CONFIG.apiUrl}/cards/${action.payload}`);

              store.dispatch(addDetails(data.card));
            } catch (err) {
              console.log(err); // eslint-disable-line

              store.dispatch(addDetails({}));
            }

            break;
          default:
            next(action);
        }
      };
