import React, { Component } from 'react';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      index: 0
    }
  }
  areaInfo = (event) => {
    const id = event.target.id;
    this.setState({
      index:id
    })
  }
  render() {
    const index = this.state.index;
    const data = this.state.data;
    const blurb = data[index].definition;
    const picture = data[index].profilePicture;
    const localAthurity = data[index].localAthurity;
    const quote = data[index].quote;
    const answers = data[index].answers;
    const changeMyAnswer = this.props.whenClick;
    let completeDivStyle = {      
      width: '0px'
    }
    return (
      <div className="result">
        <h3>Based on your answers, you might want to consider somewhere like:</h3>
        <div className='ansDiv'>
        <div className="topScoreAreas">
          {
            data.map((value, i) => {
              return (
                <input
                className='resultBtn'
                style={{width: '150px'}}
                key={i}
                id={i}
                type='button'
                value={value.localAthurity}
                onClick={this.areaInfo} />
              );
            })
          }
        </div>
        <h2>{localAthurity}</h2>
        <div>
          {blurb}
        </div>
        <br/>
        <div className='answer-value'>
        {
          answers.map((value, index) => {
            if ((value.answerId === 'q2a1') || (value.answerId === 'q2a2') || (value.answerId === 'q2a3') || (value.answerId === 'q2a4')) {
              completeDivStyle = {width: `${Math.round((value.answerValue * 200) / 348)}px`};
              return (
                <div className='progress' key={index}>
                  {value.answer}
                  <div className='complete' style={completeDivStyle}></div>
                </div>
              );
            }
          })
        }
        </div>
        <br/>
        <div className='photoDiv'>          
          <img className='personal-photo' src={picture} alt='' />
            <p>
              {quote}
            </p>
        </div>
        </div>
        <button className='resultBtn' onClick={changeMyAnswer}>Change My Answer</button>
      </div>
    );
  }
}

