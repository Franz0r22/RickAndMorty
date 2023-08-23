import axios from 'axios';

const getData = async (state) => {

    try {
        const resp = await axios.get('https://rickandmortyapi.com/api/character')
        const { data } = resp
        const [...personajes] = data.results
        state([...personajes])
    }

    catch(error) {
        console.error('error',error);
    }
}

export default getData;