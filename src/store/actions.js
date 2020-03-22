


const API = process.env.REACT_APP_API;


export const login = (user_pass_name) => {
    return{
        type:'LOGIN',
        payload:  fetch(`${API}/signin`, {
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
  