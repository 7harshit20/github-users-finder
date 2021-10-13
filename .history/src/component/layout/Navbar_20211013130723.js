// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export class Navbar extends Component {
//     static defaultProps = {
//         title: 'Github Finder'
//     }

//     static propTypes = {
//         title: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <nav className='bg-primary'>
//                 <h1>{this.props.title}</h1>
//             </nav>
//         )
//     }
// }

// export default Navbar
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                < className="fab fa-github" / >
                {title}
            </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar

