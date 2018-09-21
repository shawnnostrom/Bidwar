const memoryStore = [
  {
    
    "firstName": "Shawn",
    "email": "shawn",
    "password": "0000"
  },
  {
    
    "firstName": "Curtis",
    "email": "curtis@gmail.com",
    "password": "1111"
  },
 
]

function authenticateUser (email, password){
  const user = memoryStore.find((user) => user.email === email)
  if (!user) return null;
  if (user.password === password) return user.firstName;
  return null;
}

function findById(firstName){
  const user = memoryStore.find(user => user.firstName === firstName)
  if(!user) return null;
  return user;
}

module.exports = {
  authenticateUser,
  findById
}