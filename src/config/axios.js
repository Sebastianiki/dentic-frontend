import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://stormy-bastion-32884.herokuapp.com/api'
})

export default clienteAxios