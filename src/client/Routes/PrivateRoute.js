import React from 'react';
import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import Container from '../Components/Container';
import Row from '../Components/Row';

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
    isAuthenticated ? (
        <Route {...rest} component={(props)=> (
            <section id="user-profile">
                <Container>
                    <Row >
                        <DashboardSidebar/>
                        <Component {...props}/>
                        <div className="clear"> </div>
                    </Row>
                </Container>
            </section>
        )}/>
    ) 
    :<Redirect to="/login"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})

export default connect(mapStateToProps)(PrivateRoute);