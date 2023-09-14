import { combineReducers, createStore } from "redux";
import { sliderVisible, sliderVisibleSlicer } from "./sliderVisibleSlice";
import { sliderImgVal, sliderImgValSlicer } from "./sliderImgValSlice";
import { hallsComp, hallsCompSlicer } from "./hallsCompSlice";
import { roomItem, roomItemSlicer } from "./hallsRoomItemSlice";
import { menuComp, menuCompSlicer } from "./menuCompSlice";
import { languageVal, languageValSlicer } from "./languageValSlice";

const store = createStore(
    combineReducers({
       sliderVisible : sliderVisibleSlicer,
       sliderImgVal : sliderImgValSlicer,
       hallsComp : hallsCompSlicer,
       roomItem : roomItemSlicer,
       menuComp : menuCompSlicer,
       languageVal : languageValSlicer
    }),{
       sliderVisible : sliderVisible,
       sliderImgVal : sliderImgVal,
       hallsComp : hallsComp,
       roomItem : roomItem,
       menuComp : menuComp,
       languageVal : languageVal
    }
)

export default store