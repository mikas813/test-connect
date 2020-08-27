import React, { Component } from 'react'
import ClientsItem from './ClientsItem'

export default class Clients extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <ClientsItem />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
