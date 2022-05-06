import React, {useState} from "react";
import Axios from 'axios'
import "./App.css"

const Budget = () => {
    const {budget} = useContext(AppContext)
}
;
const Budget = () => {
    const [budget, setBudget] = useState()
    const [spent, setSpent] = useState()
    const [remaining, setRemaining] = useState()
    const getBudget = ()=> {
        axios.get('').then((response)) => {

    
        }
    }
}
        return (
<div>
<span> Budget: {budget}</span>
      <span> Remaining: {remaining}</span>
      <span> Spent so far: {spent}</span>




  </div>
        );


export default Budget;
