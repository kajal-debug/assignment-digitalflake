// // 2. Create Middleware
// import axios from 'axios';

// const apiMiddleware = async (url, options) => {
  
//     await axios.post(url, options).then((response)=>{
//       console.log("res++",response)
//     //    Mail(response.data.message)
//       return response;
//     }).catch ((error)=> {
//     //   Mail(error.message?error.message:error)
//       console.error('Error:', error.message?error.message:error);
//       // throw error;
//       // return error
//     })};
// // 3. Configure API Routes

// export const getMessages = (email,password) => {
//   return apiMiddleware(`http://127.0.0.1:5000/api/auth/login`,{email:email,password:password});
// };
// apiMiddleware.js
import axios from 'axios';

const apiMiddleware = ({ dispatch }) => next => async action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  
  next(action);
};

export default apiMiddleware;
