
const TYPE = 'changeSliderVisible'

export const sliderVisible = {
    visible : 'none'
}

export function sliderVisibleSlicer(state={},action){
  if(action.type === TYPE){
    return {
            visible : action.payload.visible    
    }
  }
  return state
}

export function selectSliderVisible(state){
   return state.sliderVisible.visible
}

export function changeSliderVisible(newValue){
   return {
      type : TYPE,
      payload : {
        visible : newValue
      }
   }
}
