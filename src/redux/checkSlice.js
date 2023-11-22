
const TYPE = 'changeCheckSlice'

export const checkSlice = {
    halls : 'white',
    menu : 'white',
    gallery : 'white',
    about : 'white',
    contact : 'white'
}

export function checkSliceSlicer(state={},action){
  if(action.type === TYPE){
    return  action.payload.checkSlice    
   
  }
  return state
}

export function selectCheckSlice(state){
   return state.checkSlice
}

export function changeCheckSlice(newValue){
   return {
      type : TYPE,
      payload : {
        checkSlice : newValue
      }
   }
}