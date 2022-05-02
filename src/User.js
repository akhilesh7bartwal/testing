import React,{ useState } from "react"

const User =({data}) => {
    const {userDetails} =data
    const [showUser,setShowUser] = useState(false)
    const storeChange = (event) => {
        setShowUser(!showUser)
        //console.log(event.target.value)
    };
    console.log(showUser)
   
      return(
          <>
        <div>
          <div className="info-check">
            <input
              type="checkbox"
              onChange={storeChange}
              className="checkboxUser"
              checked={showUser}
            />
            <label className="checkbox-label">Show Info</label>   
          </div>
            <ul>
                {showUser && userDetails.map((userDetails) =>{
                    return <li key={userDetails.id}>{userDetails.name}</li>
                })}
            </ul>
        </div>
        </>
      );
            }
  export default User;