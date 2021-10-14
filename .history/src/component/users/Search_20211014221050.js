import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { searchUsers, clearUsers, users } = githubContext;

    const [text, setText] = useState('');

    const onChange = (e) => {
        return setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            alertContext.setAlert('No input provided', 'light');
            return;
        }
        searchUsers(text);
        setText('');
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            )
            }
        </div>
    )
}


export default Search
