import React from "react";
import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";

import ArtAddForm from "./Sections/ArtAddForm";

const ArtAddPage = props => (
    <Container>
        <Divider hidden />

        <ArtAddForm onSubmit={() => console.log("Form was submitted")} />

        {/*<Message>*/}
        {/*    <Message.Header>Form data:</Message.Header>*/}
        {/*    <pre>{JSON.stringify(props, null, 2)}</pre>*/}
        {/*</Message>*/}
    </Container>
);

const mapStateToProps = state => {
    return state.form.profile
        ? {
            values: state.form.profile.values,
            submitSucceeded: state.form.profile.submitSucceeded
        }
        : {};
};

const connectedArtAddPage = connect(mapStateToProps)(ArtAddPage);
export {connectedArtAddPage as ArtAddPage};