
import Login from "../pages/Login"
import SignUp from "../pages/Signup"
import DashboardIndex from "../view/Dashboard"
import { Routes, Route ,Navigate} from 'react-router-dom'
function index() {
  return (
    <>
      <Routes>
      <Route element={ <Navigate to='/auth/login' /> } path='/' />
        <Route element={<Login />} exact path='/auth/login'/>
        <Route element={<SignUp />} exact path='/auth/signup'/>
        <Route element={<DashboardIndex />} exact path='/dashboard'/>
        
     </Routes>
    </>
)}

export default index
