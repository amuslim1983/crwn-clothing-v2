import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import {
  createAuthUserWithEmailAndPassword,
  CreateUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import MyButton from '../my-button/my-button.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleFieldValueChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('password donot match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      const firebaseUser = await CreateUserDocumentFromAuth(user, {
        displayName,
      });

      resetFormFields();
      console.log(user);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert(`User with ${email} already exists.`);
        return;
      }
      console.log(err);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Signup with your Email & Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          required
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleFieldValueChange}
          id='displayName'
        />

        <FormInput
          label='Email'
          required
          type='email'
          name='email'
          value={email}
          onChange={handleFieldValueChange}
          id='email'
        />

        <FormInput
          label='Password'
          required
          type='password'
          name='password'
          value={password}
          onChange={handleFieldValueChange}
          id='password'
        />

        <FormInput
          label='Confirm Password'
          required
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleFieldValueChange}
          id='confirmPassword'
        />

        <MyButton type='submit' childern={'Sign Up'} buttonType='google'>
          Sign Up
        </MyButton>
      </form>
    </div>
  );
};

export default SignUpForm;
