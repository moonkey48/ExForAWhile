import axios from 'axios'

export const fetchExList = async () => {
    return await axios('http://localhost:3001/users')
    .then(data => {
        console.log(data)
        return data.data
    })
}