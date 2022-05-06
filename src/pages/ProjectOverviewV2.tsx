import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getProfileInfo } from '../api/database.api'
import { INameProps, objectNameForm } from '../constants/profile.constants'

const ProfilePage = () => {

  const [name, setName] = useState<INameProps>(objectNameForm)

  useEffect(() => {
    getProfileInfo().then((res: any) => {
      console.log(res)
      setName(res.coord)
    })
  }, [])

  return (
    <NavBar>
      <div className="container text-center">This is the Project Overview Page</div>
      <div className="container">
        <div className="row align-items-start">
        <div className="col text-center">
            Description = {name.budget}
          </div>
          <div className="col text-center">
            Expense = {name.name}
          </div>
          <div className="col text-center">
            Expense = {name.description}
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="row align-items-start">
        <div className="col text-center">
            Description = {name.budget}
          </div>
          <div className="col text-center">
            Expense = {name.name}
          </div>
          <div className="col text-center">
            Expense = {name.description}
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="row align-items-start">
        <div className="col text-center">
            Description = {name.budget}
          </div>
          <div className="col text-center">
            Expense = {name.name}
          </div>
          <div className="col text-center">
            Expense = {name.description}
          </div>
        </div>
        
      </div>
    </NavBar>
  )
}

export default ProfilePage