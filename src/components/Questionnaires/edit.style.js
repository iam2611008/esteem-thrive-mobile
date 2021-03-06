import styled from 'styled-components'

const EditWrapper = styled.div`
  .questionnaire-content {
    position: relative;
    h3 {
      margin-top: 0;
    }
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      li {
        width: 200px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        color: white;
        p {
          margin: 5px 0;
        }
      }
    }
    .question {
      padding-top: 30px;
    }
  }
`

export default EditWrapper
