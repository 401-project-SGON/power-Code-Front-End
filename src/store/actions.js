import data from "../components/data";

const API = process.env.REACT_APP_API;
const API2 = process.env.GOOGLE
// const API = 'http://localhost:3002'

export const login = (user_pass_name) => {
    return{
        type:'LOGIN',
        payload: fetch(`${API}/signin`, {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: new Headers({
              'Authorization': `Basic ${btoa(`${user_pass_name.username}:${user_pass_name.password}`)}`,
            }),
          })
            .then(response => response.text())
            .then(token => {
              return validateToken(token.replace(/(^")|("$)/g, ''))
            })
            .catch(console.error)
        }  
  }

  
export const validateToken = (token) => {
   return{
       type:'VALIDATE_TOKEN',
       payload:token
   }
  }

export const logout = () => {
    return{
        type:'LOGOUT',
    }
   }

export const signup = (user_pass_name)=>{
console.log('user_pass_name : ', user_pass_name);
    return{
        type:'SIGNUP',
        payload: fetch(`${API}/signup`, {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(user_pass_name),
          })
            .then(response => response.text())
            .then(response => {
              console.log('response : ', response);
            })
            .catch(console.error)
            
        }  
    
}

// export const signByGoogle=()=>{
//     return{
//         type:'SIGNUPGOOGLE',
//         payload: fetch(API2)
//         .then(response => {
//             console.log('response : ',response );
//             console.log('response.json() : ',response.json() );
//             // console.log('response.text() : ',response.text() );

//             response.json().then((data)=>{console.log('data : ', data);;return data})
//         //    return response.json()
//         })
//         .catch(console.error)
        
//     }  
    
    
// }

export const getData = ()=>{
        return{
            type:'GETDATA',
            payload: fetch(`${API}/course`)
                .then(response => {
                   return response.json()
                })
                .catch(console.error)
                
            }  
        
    }
  

export const render = ()=>{
    return{
        type:'RENDER'

    }
}

export const choose =(payload)=>{
    return{
        type:'CHOSECOURSE',
        payload:payload
    }
}

export const levelsRendered =()=>{
    return{
        type:'LEVELS_RENDERED'
    }
}
export const levelsNotRendered =()=>{
    return{
        type:'LEVELS_NOT_RENDERED'
    }
}

export const saveImage = (payload)=>{
console.log('payload : ', payload);
    return{
        type:'SAVEIMAGE',
        payload:fetch(`${API}/image`, {
            method: 'POST',
            body: payload
          })
          .then(res => res.json())
        //   .then(data=>data[0].url)
         
    }
}

export const getUsers = ()=>{
    return{
        type:'GETUSERS',
        payload: fetch(`${API}/users`)
            .then(response => {
               return response.json()
            })
            .catch(console.error)
            
        }  
    
}

export const selectSubject = (payload)=>{
    return{
        type:'SELECTSUBJECT',
        payload:payload
    }
}

export const sendFeedback = (payload)=>{
    return{
        type:'SENDFEEDBACK',
        payload:fetch(`${API}/feedback`, {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(payload)
          })
            .then(response => response.json())
            .then((response)=>console.log('response:  ', response))
            .catch(console.error)
        }  
    }


export const getFeedback = () =>{
    return{
        type:'GETFEEDBACK',
        payload:fetch(`${API}/feedback`)
        .then(response => {
           return response.json()
        })
        .catch(console.error)
        
    }  

    
}
