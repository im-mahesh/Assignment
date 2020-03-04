import React, { Component } from 'react'
import List from './List'
import Add from './Add'

export default class AssignmentHome extends Component {
    render() {
        return (
            <div>
                <Add />
                <List />
            </div>
        )
    }
}
