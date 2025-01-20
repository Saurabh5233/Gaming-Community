<<<<<<< HEAD
=======

>>>>>>> c83aea117e778be044a1b43995cf66d350acaaf0
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token) {
            setIsAuthenticated(true);

            if (['/', '/login', '/signup'].includes(location.pathname)) {
                navigate('/home', { replace: true }); 
            }
        } else {
            setIsAuthenticated(false); 
        }
    }, [location.pathname, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;
