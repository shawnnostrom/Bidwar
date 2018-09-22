const memoryStore = {
  items:[
    {id:0,title:"Xbox One", description:"New Xbox One",price:1, picture:"https://cdn.vox-cdn.com/thumbor/_4-v-hkd4L9hIVSrJSp2seMTeKo=/0x0:950x623/920x613/filters:focal(399x236:551x388):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg", time:86400000},
   
  ]
};

function checkIfExists(key){
  return !!Object.keys(memoryStore).find(memoryKey => memoryKey === key);
}

function addToMemoryStore(newItems){
    memoryStore.items.push(newItems);
    return null;
  
}


function updateMemoryStore(key, value){
  const exists = checkIfExists(key);
  if (exists) memoryStore[key];
  return null
}

function deleteFromMemoryStore(key){
  const exists = checkIfExists(key);
  if (exists) delete memoryStore[key];
  return null
}

function getMemoryStore(){
  return memoryStore;
}

function addBidMemoryStore(id){
 const index = memoryStore.items.findIndex(item => item.id === id);
 memoryStore.items[index].price ++;
 return null
}


module.exports = {
  checkIfExists,
  addToMemoryStore,
  updateMemoryStore,
  deleteFromMemoryStore,
  getMemoryStore,
  addBidMemoryStore,
}