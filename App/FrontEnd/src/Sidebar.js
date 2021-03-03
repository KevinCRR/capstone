import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map(({ label, name, ...rest }) => (
          <ListItem key={name} button {...rest}>
            <ListItemText>{label}</ListItemText>
          </ListItem>
          
        ))}
      </List>
      <div class="search">
        <input type="search" class="search-box" />
        <span class="search-button">
            <span class="search-icon"></span>
        </span>
    </div>
    </div>
  )
}

export default Sidebar