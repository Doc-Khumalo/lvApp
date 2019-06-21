import {
  GET_DATA,
  GET_SCORE,
  GET_PAGE_INFO,
  GET_DIAGNOSIS_INFO,
  GET_NEW_DIAGNOSIS
} from './type';

export const getData = payload => ({
  type: GET_DATA,
  payload
});

export const getScore = payload => ({
  type: GET_SCORE,
  payload
});

export const getPageInfo = payload => ({
  type: GET_PAGE_INFO,
  payload
});

export const getNewDiagnosis = payload => ({
  type: GET_NEW_DIAGNOSIS,
  payload
});

export const getDiagnosis = payload => ({
  type: GET_DIAGNOSIS_INFO,
  payload
});