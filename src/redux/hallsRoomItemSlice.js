
const TYPE = 'changeRoomItem'

export const roomItem = {
    roomItem : 'all'
}

export function roomItemSlicer(state={},action){
  if(action.type === TYPE){
    return {
        roomItem : action.payload.roomItem    
    }
  }
  return state
}

export function selectRoomItem(state){
   return state.roomItem.roomItem
}

export function changeRoomItem(newValue){
   return {
      type : TYPE,
      payload : {
        roomItem : newValue
      }
   }
}