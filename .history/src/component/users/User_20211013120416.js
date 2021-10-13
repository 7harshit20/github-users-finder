import React, { Fragment, Component } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }
    render() {
        const { name, avatar_url, location, bio, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;
        const { loading } = this.props;

        if (loading) return (<Spinner />);
        return (
            <Fragment>
                {name}
            </Fragment>
        )
    }
}

export default User