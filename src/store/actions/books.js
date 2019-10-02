import { bookConstants } from '../constants';
import { bookServices } from '../../services';

const bookActions = {
  getData,
};

function getData(page) {
  return (dispatch) => {
    bookServices
      .getData(page)
      .then((books) => {
        console.log('bbbbbb', books);
        dispatch({
          type: bookConstants.GET,
          payload: {
            books,
            page,
          }
        });
      })
      .catch((error) => {});
  };
}

export { bookActions };
