import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from './../Firebase/firebase.config';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// step-1: create context
export const AuthContext = createContext(null)
//GoogleProvider
const googleProvider = new GoogleAuthProvider()
//kono parameter deya lagbe na karon auth, provider 2tai ekhane ase,after that authInfo te pathay dibo
const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
    
}

const AuthProvider = ({children}) => {
    //
    //jehetu authentication niye kaj korbo tai 1ta state thakbe
    const [user, setUser] = useState(null)
    //page jokhon loading hoye ashbe by default true hishebe pabe
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    //Observe auth state change
    // ei application ta state take dhore rakhtese ,jodi log out na hoy tahole state take dhore rekhe she dekhabe user ta ase kina
    //kono parameter nai prothombar jokhon page load hobe tokho dekhbe, usin call back function
    // explain unSubscribe: jokhon 1ta state change er moddhe observer kortesi she 1ta reference rekhe disse, she 1ta callback function hishebe peye jay jate pore chaile ei relation ta detach korte pari
    // advantage unSubscribe: jekhanei jai na keno kono karon state ta jodi change hoy tahole ei information ta she dhore rakhe. 2nd- jehetu setUser e currentUser set kortesi tai user e ei value ta pabe,paile jekono route theke user er info paite pari
    /**useEffect nilam she onAuthStateChanged call korbe
     * eta 2ta parameter ney, 1ta auth, 2nd ta observer function mane jokhon change hobe tokhon function take call korbe
     * then shorashori / condition use kore bolte pari if user eta hole eta hobe something-ekhane directly use korlam 
     * 
    */
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current value of the current user', currentUser)
        setUser(currentUser)
        // jokhon user e kono 1ta man set kore felbo tokhon loading shesh hobe 
        setLoading(false)
    });
    return () =>{
        unSubscribe()
    }
   }, [])
    // const authInfo = {name: 'nobody'}
    //user ta share kore dite pari.it means I have a object authInfo which has a property{user}, & property value is user's value, & createUser funtion takeo diye dibo,keno? jate eta overall application e access kora jay-sheta korte parbo useContext diye karon eta  context e set korsi.
    const authInfo = {user,loading , createUser, signInUser, logOut, signInWithGoogle}
    return (
        //step-2: set provider with value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
    // Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types. Thats why we use node type props
}



/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. Use the AuthProvider in the main.jsx file
 * 4. access children in the AuthProvider components as children and use it in the middel of the provider
*/

// main.jsx er peter vitor jei jinishta ase eitake amader AuthProvider / context api er jonno je provider tar vitore rakha, tahole main.jsx e AuthProvider er moddhe je <RouterProvider> set korsi tahole shob route e jeno amader ei context api ta peye jay. children hishe pabo. karon amra jani ei <AuthContext.Provider value={authInfo}> er peter vitor jetai{children} </AuthContext.Provider> thakbe shetai amader context api access korte parbe.
// so context (<AuthContext) ta jekhane amra use korsi tar peter vitore amra full application (children) ta rekhe disi.
            
            