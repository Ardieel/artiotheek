import React from 'react';
import {connect} from 'react-redux';

import {userActions} from '../../_actions';
import Container from "@material-ui/core/Container";
import ArtAddForm from "./Sections/ArtAddForm";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";

class ArtAddPage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <Container>
                <ArtAddForm onSubmit={() => console.log("ProfileForm was submitted")}/>

                {/*<Message>*/}
                {/*    <Message.Header>Form data:</Message.Header>*/}
                {/*    <pre>{JSON.stringify(props, null, 2)}</pre>*/}
                {/*</Message>*/}
            </Container>
        );
    }
}

function mapState(state) {
    const {users, authentication} = state;
    const {user} = authentication;
    return {user, users};
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const mapStateToProps = state => {
    return state.form.profile
        ? {
            values: state.form.profile.values,
            submitSucceeded: state.form.profile.submitSucceeded
        }
        : {};
};

const connectedArtAddPage = connect(mapState, actionCreators)(ArtAddPage);
export {connectedArtAddPage as ArtAddPage};