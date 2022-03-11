import axios from 'axios'
export const applyDrag = async (arr, dragResult) => {
  console.log(dragResult)
  let dnd = await axios.put(process.env.VUE_APP_API_ENDPOINT + "/task/dragdrop", dragResult, { headers: {
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json"
      }})
  
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }


  return result
}

