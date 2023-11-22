
const TYPE = 'changeAboutImg'

export const aboutImg = [
    {id : 0,imgWidth : 300},
    {id : 1,imgWidth : 30},
    {id : 2,imgWidth : 30},
    {id : 3,imgWidth : 30},
    {id : 4,imgWidth : 30},
]
  

export function aboutImgSlicer(state=[],action){
  if(action.type === TYPE){
    return  action.payload.aboutImg    
   
  }
  return state
}

export function selectAboutImg(state){
   return state.aboutImg
}

export function changeAboutImg(newValue){
   return {
      type : TYPE,
      payload : {
        aboutImg : newValue
      }
   }
}