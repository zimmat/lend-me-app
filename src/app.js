import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './home'
import { Requests} from './requests'
import {Nav} from './nav'

const appRouter =() =>(
  <div>
  <Route exact path = "/" component = {Home} />
  <Switch>
    <Route exact path = "/requests" component = {Requests}/>
  </Switch>
 </div>
)

class App extends React {
render (){
  return (
    <Router>
      <Route>
       render = ({location})=>{
         <Nav>
           <appRouter/>
        </Nav>
       }
      </Route>
    </Router>
  )
}
}