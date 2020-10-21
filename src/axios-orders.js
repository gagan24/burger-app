import axios from 'axios'

const instanse = axios.create({
    baseURL: 'https://react-my-burger-7161e.firebaseio.com/'
})

export default instanse