
const TYPE = 'changeSliderImgVal'

export const sliderImgVal = {
    val : 0
}

export function sliderImgValSlicer(state={},action){
  if(action.type === TYPE){
    return {
            val : action.payload.val    
    }
  }
  return state
}

export function selectSliderImgVal(state){
   return state.sliderImgVal.val
}

export function changeSliderImgVal(newValue){
   return {
      type : TYPE,
      payload : {
        val : newValue
      }
   }
}