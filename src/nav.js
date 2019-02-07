import {NavigationDrawer} from 'react-md'
import { Nav } from './navigation'

const navItems = [
  {
    exact: true,
    label: 'Who Owes me',
    to: '/',
    icon: 'home'
  },
  {
    exact: true,
    label: 'Credit Requests',
    to: '/credits',
    icon: 'home'
  },
]

export default const Navbar = ({children}) =>{
  <NavigationDrawer
  drawerTitle = "lend Me App"
  toolbarTitle = "Lend Me App"
  navItems = {navItems.map(props =><Nav {...props}
  key = {props.to}/>)}>
   {children}
  </ NavigationDrawer>
  