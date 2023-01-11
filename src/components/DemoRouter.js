import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import CrudDemo from './CrudDemo';

const DemoRouter = () => {
    return (
        <Fragment>
            <div className='container'>
              <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/person" component={Person}/>
                    <Route path="/crud" component={CrudDemo}/>

                    <Route component={NotFound}/>
                </Switch>
                </Router>  
            </div>
        </Fragment>
    );
};
const Welcome=()=><b>Welcome Page</b>
const About=()=><b>About Us Page</b>
const Home=()=><b>Home Page</b>
const Person=()=><b>Contact Us</b>
const NotFound=()=><b>Page Not Found</b>

const Header=()=>{
    return(
        
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link className='navbar-brand' to="/">Welcome</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='navbar-brand' to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='navbar-brand'  to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='navbar-brand' to="/person">Person</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='navbar-brand' to="/crud">CRUD</Link>
                    </li>
                </ul>
                <Link type='button' className='btn btn-primary'>Sign Up</Link>
            </div>

        </nav>
    );
}


export default DemoRouter;