import { combineReducers, createStore } from "redux";
import { sliderVisible, sliderVisibleSlicer } from "./sliderVisibleSlice";
import { sliderImgVal, sliderImgValSlicer } from "./sliderImgValSlice";
import { hallsComp, hallsCompSlicer } from "./hallsCompSlice";
import { roomItem, roomItemSlicer } from "./hallsRoomItemSlice";
import { menuComp, menuCompSlicer } from "./menuCompSlice";
import { languageVal, languageValSlicer } from "./languageValSlice";
import { checkSlice, checkSliceSlicer } from "./checkSlice";
import { aboutImg, aboutImgSlicer } from "./aboutImgSlice";

const store = createStore(
    combineReducers({
       sliderVisible : sliderVisibleSlicer,
       sliderImgVal : sliderImgValSlicer,
       hallsComp : hallsCompSlicer,
       roomItem : roomItemSlicer,
       menuComp : menuCompSlicer,
       languageVal : languageValSlicer,
       checkSlice : checkSliceSlicer,
       aboutImg : aboutImgSlicer
    }),{
       sliderVisible : sliderVisible,
       sliderImgVal : sliderImgVal,
       hallsComp : hallsComp,
       roomItem : roomItem,
       menuComp : menuComp,
       languageVal : languageVal,
       checkSlice : checkSlice,
       aboutImg : aboutImg
    }
)

export default store