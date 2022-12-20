import axios from 'axios'

export const fetchExList = async () => {
    return await axios('http://localhost:3001/exlist')
    .then(data => {
        return data.data
    })
}