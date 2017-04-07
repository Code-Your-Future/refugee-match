import React, { Component } from 'react';

export default class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					blurb: 'Wandsworth is an area of South London, including the areas of Tooting, Putney and Battersea.  The current mayor of London, Sadiq Khan, is from Tooting.',
					picture: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAALGAAAAJGU0MzQ0ZTg3LWUxOTQtNGY2My1iZDkxLTJmNjQ2NjNiNmFlMQ.jpg',
					quote: 'I have lived in Wandsworth for two years.  It is known as a very ethnically diverse area of South London.  There is always a lot going on and plenty of open green spaces.  It is cheaper than most areas of London but housing is getting more expensive.  London can be stressful, but overall I have enjoyed living here!',
					answers: [
						{answerId: 'q2a1', answer: 'Job opportunities', rankedValue: 68},
						{answerId: 'q2a2', answer: 'Cost of living', rankedValue: 118},
						{answerId: 'q2a3', answer: 'Quality of schools', rankedValue: 127},
						{answerId: 'q2a4', answer: 'Level of crime', rankedValue: 42}
					]
				}			
			]
		}
	}
	render() {
		const blurb = this.state.data[0].blurb;
		const picture = this.state.data[0].picture;
		const quote = this.state.data[0].quote;
		const answers = this.state.data[0].answers;
		let completeDivStyle = {			
			width: '0px'
		}
		return (
			<div className="result">
				<h3>Based on your answers, you might want to consider somewhere like:</h3>
				<div>{blurb}</div>
				{
					answers.map((value, index) => {
						completeDivStyle = {width: `${Math.round((value.rankedValue * 200) / 348)}px`};
						return (
							<div key={index}>
								<div className='progress'>
									{value.answer}
									{value.rankedValue}
									<div className='complete' style={completeDivStyle}></div>
								</div>
							</div>
						);
					})
				}
				<div>
					<img className='personal-photo' src={picture} alt='' />
					<p>{quote}</p>
				</div>
			</div>
		);
	}
}
