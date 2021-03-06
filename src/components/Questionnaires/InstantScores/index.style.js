import styled from 'styled-components'

const InstantScoresWrapper = styled.div`
  height: 100%;
  .instant-content {
    height: calc(100% - 81px);
    position: relative;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: #2bd96b;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    p {
      margin: 0;
      color: white;
      text-align: center;
      line-height: 30px;
    } 
  }
  .content {
    padding: 20px 20px 40px;
    height: calc(100% - 130px);
    overflow-y: auto;
    .loading {
      p {
        margin-top: 150px;
      }
    }
  }
`

const MainBar = styled.div`
  display: inline-block;
  height: 300px;
  width: 30px;
  position: relative;
  .block {
    width: 100%;
    &.red {
      height: 25%;
      background-color: #ff5c33;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
    &.yellow {
      height: 25%;
      background-color: #e6da00;  
    }
    &.green {
      height: 50%;
      background-color: #2bd96b;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
  .marker {
    position: absolute;
    width: 150px;
    height: 5px;
    &.inattentive {
      text-align: right;
      background: ${props => props.inattentive_severity_score < 2 ? '#2bd96b' : 
      (props.inattentive_severity_score > 2.5 ? '#ff5c33' : '#e6da00')};
      bottom: ${props => props.inattentive_severity_score < 2 ? props.inattentive_severity_score / 2 * 50 : 
        (props.inattentive_severity_score > 2.5 ? 75 + (props.inattentive_severity_score - 2.5)/0.5 * 25 : 
        50 + (props.inattentive_severity_score - 2)/0.5 * 25)}%;
      right: 30px;
      p {
        margin-right: 10px;
      }
    }
    &.hyperactive {
      text-align: left;
      background: ${props => props.hyperactive_severity_score < 2 ? '#2bd96b' : 
      (props.hyperactive_severity_score > 2.5 ? '#ff5c33' : '#e6da00')};
      bottom: ${props => props.hyperactive_severity_score < 2 ? props.hyperactive_severity_score / 2 * 50 : 
        (props.hyperactive_severity_score > 2.5 ? 75 + (props.hyperactive_severity_score - 2.5)/0.5 * 25 : 
        50 + (props.hyperactive_severity_score - 2)/0.5 * 25)}%;
      left: 30px;
      p {
        margin-left: 10px;
      }
    }
    p {
      font-size: 0.8em;
      span {
        display: block;
      }
      &.marker-name {
        margin-top: -18px;
      }
      &.marker-rating {
        margin-top: -2px;
      }
    }
  }
`

export { InstantScoresWrapper, MainBar }