
const TYPE = 'changeLanguageVal'

export const languageVal = {
    languageVal : ''
}

export function languageValSlicer(state={},action){
  if(action.type === TYPE){
    return {
        languageVal : action.payload.languageVal    
    }
  }
  return state
}

export function selectLanguageVal(state){
   return state.languageVal.languageVal
}

export function changeLanguageVal(newValue){
   return {
      type : TYPE,
      payload : {
        languageVal : newValue
      }
   }
}