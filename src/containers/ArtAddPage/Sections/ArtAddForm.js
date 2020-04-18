import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Message } from "semantic-ui-react";

const renderCheckbox = field => (
    <Form.Checkbox
        checked={!!field.input.value}
        name={field.input.name}
        label={field.label}
        onChange={(e, { checked }) => field.input.onChange(checked)}
    />
);

const renderRadio = field => (
    <Form.Radio
        checked={field.input.value === field.radioValue}
        label={field.label}
        name={field.input.name}
        onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
    />
);

const renderSelect = field => (
    <Form.Select
        label={field.label}
        name={field.input.name}
        onChange={(e, { value }) => field.input.onChange(value)}
        options={field.options}
        placeholder={field.placeholder}
        value={field.input.value}
    />
);

const renderTextArea = field => (
    <Form.TextArea
        {...field.input}
        label={field.label}
        placeholder={field.placeholder}
    />
);

const ArtAddForm = props => {
    const { handleSubmit, reset } = props;

    return (
        <Fragment>
            <Message info>
                <p>
                    Vul hieronder de gegevens in om jouw kunstwerk toe voegen.
                </p>
            </Message>

            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Field
                        component={Form.Input}
                        label="Voornaam"
                        name="firstName"
                        placeholder="Voornaam"
                    />
                    <Field
                        component={Form.Input}
                        label="Achternaam"
                        name="lastName"
                        placeholder="Achternaam"
                    />
                </Form.Group>

                <Form.Group inline>
                    <label>Aantal zelfde kunstvoorwerpen</label>

                    <Field
                        component={renderRadio}
                        label="Een"
                        name="quantity"
                        radioValue={1}
                    />
                    <Field
                        component={renderRadio}
                        label="Twee"
                        name="quantity"
                        radioValue={2}
                    />
                    <Field
                        component={renderRadio}
                        label="Drie"
                        name="quantity"
                        radioValue={3}
                    />
                </Form.Group>

                <Field
                    component={renderTextArea}
                    label="Over"
                    name="about"
                    placeholder="Schrijf iets over het kunstwerk"
                />

                <Field
                    component={renderCheckbox}
                    label="Ik ga ermee akkoord dat deze kunst verhuurd mag worden"
                    name="isAgreed"
                />

                <Form.Group inline>
                    <Form.Button primary>Toevoegen</Form.Button>
                    <Form.Button onClick={reset}>Reset</Form.Button>
                </Form.Group>
            </Form>
        </Fragment>
    );
};

export default reduxForm({
    form: "profile"
})(ArtAddForm);
