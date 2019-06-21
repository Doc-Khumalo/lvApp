import {
  GET_DATA,
  GET_SCORE,
  GET_PAGE_INFO,
  GET_DIAGNOSIS_INFO,
  GET_NEW_DIAGNOSIS
} from './type';
import config from "../config";

const initialState = {
  userInput: [],
  totalScore: 0,
  diagnosis: null,
  complete: false,
  numberCount: 0,
  pageCounter: 1,
  data: config,
  option: config.questions[0].question_text,
  showButtonBooking: false,
};

const reducer = (state = initialState, action) => {
  let payloadData = action.payload;

  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        userInput: [ ...payloadData ]
      };

    case GET_SCORE:
      let emergencyDiagnosis = state.data.outcomes.filter(item => item.id === 'go_to_emergency_room');
      return {
        ...state,
        totalScore: payloadData,
        complete: payloadData > 49,
        diagnosis: payloadData > 49 ? emergencyDiagnosis[0].text  : null
      };

    case GET_DIAGNOSIS_INFO:
      return {
        ...state,
        diagnosis: payloadData.diagnosis,
        complete: payloadData.complete,
        showButtonBooking: payloadData.showButtonBooking
      };

    case GET_NEW_DIAGNOSIS:
      return {
        ...state,
        userInput: [],
        totalScore: 0,
        showButtonBooking: false,
        diagnosis: null,
        complete: false,
        numberCount: 0,
        pageCounter: 1,
        option: config.questions[0].question_text,
      };

    case GET_PAGE_INFO:
      return {
        ...state,
        numberCount:  payloadData.numberCount,
        pageCounter: payloadData.pageCounter,
        option: payloadData.option
      };

    default: return state;
  }
};

export default reducer;