import React, { Component } from 'react'

import { EmotionalWrapper, EmotionalBar } from './emotional.style'

class Emotional extends Component {
  state = {
    raw_score: 0
  }

  componentDidMount() {
    const { scoreData } = this.props

    this.setState({
      raw_score: scoreData.raw_score
    })
  }

  render() {
    const { raw_score } = this.state

    return (
      <EmotionalWrapper>
        <p className="info">You've identified the following regarding your child's symptom severity:</p>
        <EmotionalBar raw_score={raw_score}>
          <div className="block red">
          </div>
          <div className="block yellow">
          </div>
          <div className="block green">
          </div>
          <div className="marker raw_score">
            <p className="marker-name">
              Clinical
            </p>
            <p className="marker-rating">
              {(raw_score > 28) ? (
                <span>Clinical Rating:</span>
              ) : (
                <span>Rating:</span>
              )}
              {raw_score} out of 70.
              <br/>
              Further screening by your child's pediatrician is suggested
            </p>
          </div>
        </EmotionalBar>
      </EmotionalWrapper>
    )
  }
}

export default Emotional