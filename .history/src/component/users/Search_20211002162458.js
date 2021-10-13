import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = () => {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" name="text" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
