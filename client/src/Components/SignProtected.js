import {Navigate} from 'react-router-dom'

const SignProtected = ({children}) => {
    let token = localStorage.getItem('authorization')

    if(token === null) {
        localStorage.setItem("authorization", "")
      }

    return (
        <>
        {
            token.length ?  <Navigate to='/'/> : children
        }
        </>
    )
}


export default SignProtected