import { createContext } from "react";
import PropTypes from 'prop-types';

// step-1: create context
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const authInfo = {name: 'nobody'}
    return (
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
            
            