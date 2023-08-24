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

const filterData = async (name, status, species, state) => {
    
    try {
        console.log(name);
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}`)
        const { data } = resp
        const [...personajes] = data.results
        state([...personajes])
    }

    catch(error) {
        console.error('error',error);
    }
}

export { getData, filterData }



// const getImages = async () => {
    
//     try {
//         const resp = await axios.get('')
//     }

//     catch(error) {
//         console.log('error',error)
//     }
// }