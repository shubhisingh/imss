import axios from 'axios';


const _url = 'https://swapi.co/api/people/?page=';

const getData = (page=1) =>  {
	const requestOptions = {
		method: 'get',
    url: _url+page,
  };
	
  return axios(requestOptions)
	.then(response => {
		if ( response.status === 200 ) {
			return response.data.results;
		}
	}).catch(error => {
		console.log('error',error);
	});;
}

export const bookServices = {
	getData,
};