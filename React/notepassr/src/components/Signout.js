import React from 'react'
import { auth } from '../firebase'
import {Input, Button} from '@material-ui/core'

function Signout() {
    return (
        
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
        
    )
}

export default Signout
