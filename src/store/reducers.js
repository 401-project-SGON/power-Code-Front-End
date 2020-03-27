
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

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
    courseRendering:false
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

            return state;




        case 'VALIDATE_TOKEN':
            console.log('validate token ');
            try {
                console.log('token : ', payload);
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


        case 'SIGNUP':

            console.log('payload : ', payload);
            break

        case 'GETDATA_PENDING':
               
                   
            state = { ...state, courseRendering:true }
    
            return state
            
        case 'GETDATA_FULFILLED':
            let arr
            console.log('payload : ', payload);
            payload.forEach(item => {
                arr = [...state.data, item]
                state = { ...state, data: arr }
            })
            state = { ...state, renderd:true }
            state = { ...state, courseRendering:false }

            console.log('state : ', state);
            return state

        case 'RENDER':
            return state

        case 'CHOSECOURSE':

            state={...state,chosen:payload}
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
            console.log('payload : ', payload);
            // state={...state,url:payload.value[0].url}
            
    
        return state
        case 'SAVEIMAGE_FULFILLED':

            state = {...state,imageUploading:false}

            console.log('payload : ', payload);
        // state={...state,url:payload.value[0].url}
        

        return state

        case 'GETUSERS_FULFILLED':
            let arr2
            payload.forEach(item => {
                arr2 = [...state.users, item]
                state = { ...state, users: arr2 }
            })
            // console.log('state. : ', state.);
            return state;
       
        default:
            return state;
    }
};
