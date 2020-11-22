import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Card from '../Component/Card'
import Detail from '../Component/Detail'
import EditRecord from '../Component/EditRecord'
import NewRecord from '../Component/NewRecord'
function Routing(){

    return(
        <Switch>
            <Route exact path='/' component={Card}/>
            <Route path='/detail/:name' component={Detail}/>
            <Route path='/create' component={NewRecord}/>
            <Route path='/edit/:name' component={EditRecord}/>
        </Switch>
    )
}

export default Routing