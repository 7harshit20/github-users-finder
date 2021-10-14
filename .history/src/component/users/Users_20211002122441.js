import React from 'react'
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    }
    return (
        <div style={userStyle}>
            {users.map(user => (
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

Users.prototype = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
