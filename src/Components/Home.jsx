import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h2>This is home of: {authInfo.name} </h2>
        </div>
    );
};

export default Home;