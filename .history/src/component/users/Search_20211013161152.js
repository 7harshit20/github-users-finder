import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ clearUsers, showClear, searchUsers }) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        return setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            this.props.setAlert('No input provided', 'light');
            return;
        }
        searchUsers(text);
        this.setText('');
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange} />
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
