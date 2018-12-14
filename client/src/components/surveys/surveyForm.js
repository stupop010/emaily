import _ from 'lodash'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import surveyField from './surveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {
    renderField(){
        return _.map(formFields, ({ label, name}) => {
            return <Field key={name} label={label} name={name} component={surveyField} type='text'/>
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderField()}
                    <Link to='/surveys' className="red btn-flat white-text">
                     Cancel
                    </Link>
                    <button className="teal btn-flat right white-text" type="submit">Next <i className="material-icons right">done</i></button>
                </form>
            </div>
        )
    };
};

function validate(values){
    const errors = {}

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name, noValueError }) => {
        if(!values[name]){
            errors[name] = noValueError;
        }
    })

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)