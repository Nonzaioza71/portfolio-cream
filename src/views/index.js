import React, { Component } from 'react'
import Content from './content'
import Topbar from './topbar'

export default class Main extends Component {
    render() {
        return (
            <>
                <Topbar />
                <Content />
            </>
        )
    }
}
