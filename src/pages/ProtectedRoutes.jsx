
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {

   const { trainerName } = useSelector(state => state)

    

    if(trainerName.length >= 3 ){
       return <Outlet />

    } else {
        return <Navigate to='/' />
        
    }
}

export default ProtectedRoutes