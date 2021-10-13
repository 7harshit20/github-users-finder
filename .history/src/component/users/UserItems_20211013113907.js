// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export class UserItems extends Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         id: 'id',
//     //         login: 'mojombo',
//     //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//     //         html_url: 'https://github.com/mojombo'
//     //     }
//     // }

//     // state = {
//     //     id: 'id',
//     //     login: 'mojombo',
//     //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//     //     html_url: 'https://github.com/mojombo'
//     // }
//     render() {
//         const { login, avatar_url, html_url } = this.props.user;
//         return (
//             <div className="card text-center">
//                 <img src={avatar_url} className="round-img" alt="profile pic" style={{ width: '60px ' }} />
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
//                 </div>
//             </div>
//         )
//     }
// }
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
    // const UserItems = (props) => {
    //     const { login, avatar_url, html_url } = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" alt="profile pic" style={{ width: '60px ' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )
}

UserItems.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItems
