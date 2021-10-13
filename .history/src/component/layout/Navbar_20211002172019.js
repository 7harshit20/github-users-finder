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

const Navbar = ({ title }) => {
    return (
        <nav className='bg-primary'>
            <h1>
                {title}
            </h1>
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

