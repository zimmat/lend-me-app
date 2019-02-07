import React from 'react'
import { Route,Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontIcon, ListItem } from 'react-md'



export default const Nav = ({label,to,exact,icon}) =>(
  <Route path = {to} exact = {exact}>{({match})=>{
    let leftIcon
    if(icon){
      leftIcon = <FontIcon> {icon} </FontIcon>
      return(
        <ListItem component={Link}
        active={!!match}
        to = {to}
        primaryText= {label}
        leftIcon = {leftIcon}
        />
      )
    }
  }}</Route>
)

Nav.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  exact: PropTypes.bool,
  icon: PropTypes.node
}

