import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { MyInput } from '../common/formControls/inputField';
import { Redirect } from 'react-router';
import classes from '../common/formControls/inputField.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={MyInput} validate={[required]} name="email" type="text" placeholder="Email"/>
            </div>
            <div>
                <Field component={MyInput} validate={[required]} name="password" type="password" placeholder="Password"/>
            </div>
            <div>
                <Field component="input" name="rememberMe" id="rememberCheck" type="checkbox"/>
                <label htmlFor="rememberCheck">Remember me</label>
            </div>
            { props.error && 
                <div className={classes.commonError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Enter</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData);
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);