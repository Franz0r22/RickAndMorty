import axios from 'axios';

const getData = async (name, status, species, state, page, pageCount) => {

    try {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&page=${page}`)
        const { data } = resp
        const [...personajes] = data.results
        const pages = data.info.pages
        state([...personajes])
        pageCount(pages)
    }

    catch(error) {
        console.error('error',error);
    }
}

const singleData = async (id, state) => {
    
    try {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const { data } = resp
        const character = data
        state(character) 
    }

    catch(error) {
        console.error('error',error);
    }
}

export { getData, singleData }



// const getImages = async () => {
    
//     try {
//         const resp = await axios.get('')
//     }

//     catch(error) {
//         console.log('error',error)
//     }
// }