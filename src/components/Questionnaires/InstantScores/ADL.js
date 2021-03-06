import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'

import ADLWrapper from './ADL.style'

class ADL extends Component {
	state = {
		strengths: [],
		typicals: [],
		needs: []
	}

	componentDidMount() {
		const { scoreData } = this.props;

		scoreData.questionnaire_responses.map((response, idx) => {
			let question_title

			switch (response.question_response.rating) {
				case 'strength':
					this.setState((prevState) => {
						prevState.strengths.push(response.question.title.substring(0,50)+'...');
						return prevState
					})
					break
				case 'typical':
					this.setState((prevState) => {
						prevState.typicals.push(response.question.title.substring(0,50)+'...')
						return prevState
					})
					break
				case 'need':
					this.setState((prevState) => {
						prevState.needs.push(response.question.title.substring(0,50)+'...')
						return prevState
					})
					break
			}
		})
	}

	render() {
		const { strengths, typicals, needs } = this.state
		const options = {
			loop: false,
			margin: 5,
			nav: true,
			navText: ["<img src='/left.png'/>", "<img src='/right.png'/>"]
		}
		console.log(strengths)

		return (
			<ADLWrapper>
				<div className="scores strengths">
					{ strengths.length > 0 && 
						<div>
							<p className="title">{strengths.length} Strengths</p>
							<OwlCarousel 
								className="owl-theme"
								{...options}
							>
								{ strengths.map((item, idx) => {
									return (
										<div className="item" key={idx}>
											<p>{item}</p>
										</div>
									)
								})}
							</OwlCarousel>
						</div>
					}
				</div>
				
				<div className="scores typicals">
					{ typicals.length > 0 && 
						<div>
							<p className="title">{typicals.length} Typicals</p>
							<OwlCarousel 
								className="owl-theme"
								{...options}
							>
								{ typicals.map((item, idx) => {
									return (
										<div className="item" key={idx}>
											<p>{item}</p>
										</div>
									)
								})}
							</OwlCarousel>
						</div>
					}
				</div>

				<div className="scores needs">
					{ needs.length > 0 && 
						<div>
							<p className="title">{needs.length} Needs</p>
							<OwlCarousel 
								className="owl-theme"
								{...options}
							>
								{ needs.map((item, idx) => {
									return (
										<div className="item" key={idx}>
											<p>{item}</p>
										</div>
									)
								})}
							</OwlCarousel>
						</div>
					}
				</div>
			</ADLWrapper>
		)
	}
}

export default ADL