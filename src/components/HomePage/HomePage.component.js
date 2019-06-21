import React  from 'react';
import './HomePage.css';
import QuestionsDisplay from '../Questions/Questions.component';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextButtonDisabled: true
    };
  }

  pushData = () => {
    const { pageCounter, numberCount, data, getPageInfo, totalScore, getDiagnosis  } = this.props;

    this.setState({ nextButtonDisabled: true });

    if (numberCount + 1 === data.questions.length) {
      data.outcomes.forEach(item => {
        if (totalScore <= 5 && item.id === 'rest_and_come_back_later') {
          getDiagnosis({ complete: true, diagnosis: item.text, showButtonBooking: false })
        }
        if (totalScore > 5 && totalScore <= 49 && item.id === 'see_a_doctor') {
          getDiagnosis({ complete: true, diagnosis: item.text, showButtonBooking: true })
        }
      })
    } else {
      getPageInfo({
        numberCount: numberCount + 1,
        pageCounter: pageCounter + 1,
        option: data.questions[numberCount + 1].question_text
      });
      this.outcomesCalculator();
    }
  };

  outcomesCalculator = () => {
    const { userInput, getScore} =  this.props;
    let totalScores;

    if (userInput.length > 0) {
      totalScores = userInput.map(item => item.score).reduce((prev, next) => prev + next);
      getScore(totalScores);
    } else {
      getScore(userInput[0].score);
    }
  };

  optionSelection(item) {

    const { userInput } = this.props;
    let itemsSelected = userInput;

    this.setState({ nextButtonDisabled: false });

    if (userInput.length > 0) {
      let foundIndex = itemsSelected.findIndex(x => x.questionId === item.questionId);
      foundIndex === -1 ? itemsSelected.push(item) : itemsSelected[foundIndex] = item;
      this.props.getData(itemsSelected);
    } else {
      this.props.getData([ item ]);
    }
  };

  handleNewCheck = () => this.props.getNewDiagnosis();

  handleMeetingBook = () => {
  //  implement booking confirmation
  };


  render() {
    const { complete, pageCounter, diagnosis, numberCount, data, option, showButtonBooking } = this.props;
    const { nextButtonDisabled } = this.state;

    return (
      <section>
        <header className='back-tracker'>
          <h6> Heartburn Checker </h6>
        </header>
        <p className='line-counter' style={{ width: `${pageCounter * 10}%` }} />
        <div className='header-wrapper'>
          <h4 className='header-question'>{complete ? 'Thank you for answering the questions!' : option}</h4>
          {complete &&
            <p className='para-diagnosis'>{diagnosis}</p>
          }
        </div>
        <React.Fragment>
          {!complete &&
            <QuestionsDisplay
              data={data}
              numberCount={numberCount}
              myChange={e => this.optionSelection(e)}
            />
            }
          <React.Fragment>
            {showButtonBooking ? (
              <div>
                <button className='button' onClick={this.handleMeetingBook}>book a meeting</button>
              </div>
              ) : (
                <React.Fragment>
                  {!complete &&
                    <div className='next-button-wrapper'>
                      <button className='button' onClick={this.pushData} disabled={nextButtonDisabled}>next</button>
                    </div>
                  }
                </React.Fragment>
            )
            }
          </React.Fragment>
        </React.Fragment>
        { complete || showButtonBooking ? (
          <div>
            <a href='#' className='next-button-wrapper' onClick={this.handleNewCheck}>Back to the start screen</a>
          </div>
        ) : null
        }
      </section>
    );
  }
}

export default HomePage;