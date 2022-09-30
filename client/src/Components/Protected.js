import {Navigate} from 'react-router-dom'

const Protected = ({children}) => {
    let token = localStorage.getItem('authorization')

    if(token === null) {
        localStorage.setItem("authorization", "")
      }

    return (
        <>
        {
            token.length ? children : <Navigate to='/signin'/>
        }
        </>
    )
}


export default Protected