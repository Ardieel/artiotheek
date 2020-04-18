import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class UserLoggedIn extends Component {
    render() {
        const user = this.props.authentication.user;

        return (

            <div>
                {user && user.firstName &&
                <h3>Ingelogd als: <Link to="/">{user.firstName}</Link></h3>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedUserLoggedIn = connect(mapStateToProps)(UserLoggedIn);
export { connectedUserLoggedIn as UserLoggedIn };