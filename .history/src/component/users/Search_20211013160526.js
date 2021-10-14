import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ clearUsers, showClear, searchUsers }) => {
    state = {
        text: ''
    };
    const onChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            this.props.setAlert('No input provided', 'light');
            return;
        }
        searchUsers(this.state.text);
        this.setState({ text: '' });
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {showClear && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            )
            }
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
