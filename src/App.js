import {Component} from "react";
import {Route, Routes} from 'react-router-dom'
import  Login from './pages/login/login'
import  Admin from './pages/admin/admin'

export default class App extends Component {

    render() {
        return(
            <Routes>
                <Route path="/login" element={<Login/>}/>
                {/*<Route path="/" element={<div>Admin</div>}/>*/}
                <Route path="/" element={<Admin/>}/>
            </Routes>
        )
    }
}