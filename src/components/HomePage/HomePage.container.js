import { connect } from 'react-redux';
import HomePage from './HomePage.component';
import { getData, getScore, getDiagnosis, getPageInfo, getNewDiagnosis } from '../../modules/actions';

const mapDispatchToProps = {
  getData,
  getScore,
  getDiagnosis,
  getPageInfo,
  getNewDiagnosis
};

const mapStateToProps = state => ({
  totalScore: state.reducer.totalScore,
  diagnosis: state.reducer.diagnosis,
  userInput: state.reducer.userInput,
  complete: state.reducer.complete,
  data: state.reducer.data,
  showButtonBooking: state.reducer.showButtonBooking,
  option: state.reducer.option,
  score: state.reducer.score,
  numberCount: state.reducer.numberCount,
  pageCounter: state.reducer.pageCounter

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);