
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import feedback from '../components/feedback/feedback';

let initialState = {
    loggedIn: false,
    user: {},
    token: '',
    data: [],
    renderd:false,
    chosen:'',
    levelsRendered:false,
    users:[],
    imageUploading:false,
    courseRendering:false,
    selectedSubject:{},
    signing:false,
    signup:false,
    feedbacksent:false,
    feedback:[]
}



export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "LOGIN":

            break;


        case "LOGIN_FULFILLED":
            let token = payload.payload;
            console.log('fullfilled ');
            let user = jwt.verify(token, process.env.REACT_APP_SECRET);
            console.log('user : ', user);
            // change state
            state = { ...state, loggedIn: true }
            cookie.save('auth', token)
            state = { ...state, token: token }
            state = { ...state, loggedIn: true }
            state = { ...state, user }
            console.log('user : ', user);
            state={...state,signing:false}

            return state;


            case "LOGIN_PENDING":
            
            state={...state,signing:true}

            return state;




            case 'VALIDATE_TOKEN':
                try {
                    let user = jwt.verify(payload, process.env.REACT_APP_SECRET);
                    console.log('user : ', user);
                    state = { ...state, loggedIn: true }
                    cookie.save('auth', payload)
                    state = { ...state, token: payload }
                    state = { ...state, loggedIn: true }
                    state = { ...state, user }
                    return state;
                }
                catch (e) {
                    console.log('e : ', e);
                    state.loggedIn = false;
                    state.token = null;
                    state.user = {}
    
                    return state;
                }
    
            case 'LOGIN_REJECTED':
    
                state.loggedIn = false;
                state.token = null;
                state.user = {}
    
                return state;

        case 'LOGOUT':
            state = { ...state, loggedIn: false }
            state = { ...state, token: null }
            state = { ...state, user: {} }
            cookie.remove('auth')

            return state


        case 'SIGNUP_PENDING':

            state={...state,signing:true}
            console.log('state.signing : ', state.signing);
            return state

        case 'SIGNUP_FULFILLED':

            state={...state,signing:false}
            state={...state,signup:true}

                
            return state
        case 'GETDATA_PENDING':
               
                   
            state = { ...state, courseRendering:true }
    
            return state
            
        case 'GETDATA_FULFILLED':
            let arr
            payload.forEach(item => {
                arr = [...state.data, item]
                state = { ...state, data: arr }
            })
            state = { ...state, renderd:true }
            state = { ...state, courseRendering:false }
            return state

        case 'RENDER':
            return state

        case 'CHOSECOURSE':
            let arr3 = state.data.filter(item=>item.courseName==payload)
            state={...state,chosen:arr3}
            console.log('state.chosen : ', state.chosen);
            return state

        case 'LEVELS_RENDERED':
            state = {...state,levelsRendered:true}
            return state;

        case 'LEVELS_NOT_RENDERED':
            state = {...state,levelsRendered:false}
            return state;

        case 'SAVEIMAGE_PENDING':

            
            state = {...state,imageUploading:true}
            
    
        return state
        case 'SAVEIMAGE_FULFILLED':

            state = {...state,imageUploading:false}

            console.log('payload : ', payload);
        

        return state

        case 'GETUSERS_FULFILLED':
            let arr2
            payload.forEach(item => {
                arr2 = [...state.users, item]
                state = { ...state, users: arr2 }
            })
            return state;

        case 'SELECTSUBJECT':

            state={...state,selectedSubject:payload}
            console.log('state.selectedSubject : ', state.selectedSubject);
            return state

        case 'SENDFEEDBACK_FULFILLED':

        state={...state,feedbacksent:true}

        case 'GETFEEDBACK_FULFILLED':

            console.log('payload : ', payload);
            state={...state,feedback:payload}

            console.log('state.feedback : ', state.feedback);
            return state
            
        default:
            return state;
    }
};
