import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRout = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    // first e check korbe loading ke, if loading is true tahole loading take dekhabe,user check kortese na. if loading is false then user ke check korbe thakle dekhabe na thakle login page e pathay dibe
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRout;

PrivateRout.propTypes ={
    children: PropTypes.node
}

/***
 * 1. Private route er jonno 1ta component banalam
 * 2. props thakbe {children}.. user thakle er moddhe jabe na thakle jaite dibo na
 * 3. if(user jodi thake)return korbo ei children ke.. means jare dekhaite chassi taake dekhao
 * 4. use <Navigate> component.explain: jodi user thake tahole she jaoar shekhane (children) e jabe, jodi na paoa jay user ke tahole login page e pathay dibo
 * 5. now main.jsx e jeye. order element ke <PrivateRoute> er moddhe boshabo taile ki hobe -1st: first e PrivateRoute e jabe giye dekhbe useContext e user ase kina. jodi user ke login kora pay taile children niye jabe.
 * 2nd: ar jodi na pay tahole login page e niye jabe.
*/