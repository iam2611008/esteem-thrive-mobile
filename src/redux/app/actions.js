import { push } from 'react-router-redux';

const appActons = {
  SELECT_CHILDREN: 'SELECT_CHILDREN',
  GET_CHILDREN: 'GET_CHILDREN',
  GET_CHILDREN_SUCCESS: 'GET_CHILDREN_SUCCESS',
  GET_CHILDREN_FAIL: 'GET_CHILDREN_FAIL',

  GET_ASSESSMENTS_REQUEST: 'GET_ASSESSMENTS_REQUEST',
  GET_ASSESSMENTS_SUCCESS: 'GET_ASSESSMENTS_SUCCESS',
  GET_ASSESSMENTS_FAIL: 'GET_ASSESSMENTS_FAIL',

  GET_OUTSTANDING_ASSESSMENTS_REQUEST: 'GET_OUTSTANDING_ASSESSMENTS_REQUEST',
  GET_OUTSTANDING_ASSESSMENTS_SUCCESS: 'GET_OUTSTANDING_ASSESSMENTS_SUCCESS',
  GET_OUTSTANDING_ASSESSMENTS_FAILED: 'GET_OUTSTANDING_ASSESSMENTS_FAILED',

  SELECT_ASSESSMENT: 'SELECT_ASSESSMENT',
  GET_QUESTIONNAIRES_SUCCESS: 'GET_QUESTIONNAIRES_SUCCESS',
  GET_QUESTIONNAIRES_FAIL: 'GET_QUESTIONNAIRES_FAIL',

  SELECT_ANSWER: 'SELECT_ANSWER',
  SELECT_LAST_ANSWER: 'SELECT_LAST_ANSWER',
  PREVIOUS_QUESTION: 'PREVIOUS_QUESTION',
  COMPLETED_QUESTIONNAIRES: 'COMPLETED_QUESTIONNAIRES',
  
  select_children: ( children ) => ({
    type: appActons.SELECT_CHILDREN,
    children  
  }),
  get_children: () => ({
    type: appActons.GET_CHILDREN,
  }),
  get_assessments: () => ({
  	type: appActons.GET_ASSESSMENTS_REQUEST
  }),
  select_assessment: (assessment) => ({
    type: appActons.SELECT_ASSESSMENT,
    assessment
  }),
  select_answer: (question_response, question) => ({
    type: appActons.SELECT_ANSWER,
    payload: {
      question_response,
      question
    }
  }),
  select_last_answer: (question_response, question) => ({
    type: appActons.SELECT_LAST_ANSWER,
    payload: {
      question_response,
      question
    }
  }),
  go_previous_question: () => ({
    type: appActons.PREVIOUS_QUESTION
  }),
  completed_questionnaires: (assessmentData) => ({
    type: appActons.COMPLETED_QUESTIONNAIRES,
    assessmentData
  })
};

export default appActons;
