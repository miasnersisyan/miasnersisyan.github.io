
const TYPE = 'changeHallsComp'

export const hallsComp = [
    {id : 0,src : './images/halls/room1-1.png',roomName : 'room1'},
    {id : 1,src : './images/halls/room1-2.png',roomName : 'room1'},
    {id : 2,src : './images/halls/room2-1.png',roomName : 'room2'},
    {id : 3,src : './images/halls/room2-2.png',roomName : 'room2'},
    {id : 4,src : './images/halls/room3-1.png',roomName : 'room3'},
    {id : 5,src : './images/halls/room3-2.png',roomName : 'room3'},
    {id : 6,src : './images/halls/room4-1.png',roomName : 'room4'},
    {id : 7,src : './images/halls/room4-2.png',roomName : 'room4'},
    {id : 8,src : './images/halls/room5-1.png',roomName : 'room5'},
    {id : 9,src : './images/halls/room5-2.png',roomName : 'room5'},
]

export function hallsCompSlicer(state=[],action){
  if(action.type === TYPE){
    return  action.payload.hallsComp    
   
  }
  return state
}

export function selectHallsComp(state){
   return state.hallsComp
}

export function changeHallsComp(newValue){
   return {
      type : TYPE,
      payload : {
        hallsComp : newValue
      }
   }
}