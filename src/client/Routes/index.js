import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import indexRouter from './router'
import Homepage from '../Views/Homepage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NotFound from '../Views/NotFound';
import Category from '../Views/Category';
import About from '../Views/About';
import Contact from '../Views/Contact';
import Single from '../Views/Single';
import Login from '../Views/Login';
import Register from '../Views/Register';
import Dashboard from '../Views/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CategorySingle from '../Components/Categories/CategorySingle';
import AddNewContent from '../Components/Dashboard/AddNewContent';
import MyAccount from '../Components/Dashboard/MyAccount';
import Videos from '../Views/Videos';
import Images from '../Views/Images';
import MyImages from '../Components/Dashboard/MyImages';
import MyVideos from '../Components/Dashboard/MyVideos';
import MyMemes from '../Components/Dashboard/MyMemes';
import CustomOrder from '../Views/CustomOrder';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div className="wrap">
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Homepage} />
        <Route path='/category' component={Category} />
        <Route path='/category/:id' component={CategorySingle} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/videos" exact={true} component={Videos}/>
        <Route path="/images" exact={true} component={Images}/>
        <Route path='/images/:id' component={Single}/>
        <Route path='/videos/:id' component={Single}/>
        <Route path='/custom-order' component={CustomOrder}/>
        
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/register' component={Register} />

        <PrivateRoute path="/myaccount" exact={true} component={MyAccount}/>
        <PrivateRoute path="/myaccount/post" component={AddNewContent}/>
        <PrivateRoute path="/myaccount/images" exact={true} component={MyImages}/>
        <PrivateRoute path="/myaccount/videos" exact={true} component={MyVideos}/>
        <PrivateRoute path="/myaccount/memes" exact={true} component={MyMemes}/>

        <PrivateRoute path="/myaccount/orders/images" exact={true} component={MyImages}/>
        <PrivateRoute path="/myaccount/orders/videos" exact={true} component={MyVideos}/>
        <PrivateRoute path="/myaccount/orders/memes" exact={true} component={MyMemes}/>

        <Route component={NotFound} />
      </Switch>
      <Footer/>      
    </div>
  </Router>
)

export default AppRouter
