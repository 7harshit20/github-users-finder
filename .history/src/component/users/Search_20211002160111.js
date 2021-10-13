import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" placeholder="Search users..." />
                    <input type="submit" value="Search" className="btn btn-dark block" />
                </form>
            </div>
        )
    }
}

export default Search
