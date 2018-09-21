import axios from 'axios'

export function authenticateUser (email,password){
return axios.get(`http://localhost:8080/authenticate-user?email=${email}&password=${password}`)
.then((response) => {
  const userId = response.data.id;
  return userId;
})

}

export function addUser (email,password){
  let newUser = {
    
  }
  return axios.post(`http://localhost:8080/authenticate-user?email=${email}&password=${password}`)
}


export function findById(name){
  
  return axios.get(`http://localhost:8080/user/${name}`)
  .then((response) => {
    const user = response.data;
    return user;
    
  })
  
}