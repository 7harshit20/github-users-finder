import React, { useContext } from 'react'
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    if (githubContext.loading) {
        return <Spinner />
    }
    return (
        <div style={userStyle}>
            {githubContext.users.map(user => (
                <UserItems key={user.id} user={user} />
            ))}
        </div>
    );
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
