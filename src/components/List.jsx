import React, {useContext} from 'react'
import App from '../App'
import {AppContext} from '../context/AppContext'

const List = () => {
    const {expenses} = useContext(AppContext);
    
}



  return (
    <div>List</div>
  )
}

export default List