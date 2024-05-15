// reducers.js
import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,STATEDETAILS_SUCCESS,STATEDETAILS_FAILURE ,STATE_SUCCESS,STATE_FAILURE,CITYDETAILS_SUCCESS,CITYDETAILS_FAILURE,state } from './Action';

const initialState = {
  loading: false,
  user: null,
  error: null,
  state:null,
  statedetails:null,
  city:null,
  citydetails:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const taskRducer = (state=initialState,action)=>{
  switch (action.type){
    case STATE_SUCCESS :
      return {
        ...state,state:action.payload
      };
      case STATE_FAILURE:
        return{
          ...state,state:action.payload
        };
        case STATEDETAILS_SUCCESS:
          return{
            ...state,statedetails:action.payload
          };
          case STATEDETAILS_FAILURE:
            return{
              ...state,statedetails:action.payload
            };
            case CITYDETAILS_SUCCESS:
              return{
                ...state,citydetails:action.payload
              };
              case CITYDETAILS_FAILURE:
                return{
                  ...state,citydetails:action.payload
                };
        default :return state;

  }
}
const rootReducer = combineReducers({
  auth: authReducer,
  task:taskRducer,
});

export default rootReducer;
