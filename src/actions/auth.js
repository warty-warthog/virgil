import { firebase, googleAuthProvider,facebookAuthProvider } from '../firebase/firebase';

export const login = () => ({
  type: 'LOGIN'
  
});
const redirectUser=()=>{
  history.push('./')
}
export const startLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then((props)=>{dispatch(login());redirectUser()
      });
  };
};
export const startFaceBookLogin=()=>{
  return ()=>{
    
    firebase.auth().signInWithPopup(facebookAuthProvider)
  }
}
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
      
     firebase.auth().signOut().then(()=>dispatch(logout()));
     
     

    
     return;

  };
};
