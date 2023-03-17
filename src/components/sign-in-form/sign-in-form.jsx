import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import {
  signInWithGooglePopup,
  signinAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import MyButton from '../my-button/my-button.component';
//import { UserContext } from '../contexts/user.context';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const handleSignInWithGoogle = async event => {
  event.preventDefault();
  const { user } = await signInWithGooglePopup();
};

const SignInForm = () => {
  //const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleFieldValueChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { user } = await signinAuthUserWithEmailAndPassword(
        email,
        password,
      );
      //setting the current user to context
      // setCurrentUser(user); onAuthStateChangedListenser will take care of this as its managed in auth object
      console.log(user);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert(`You have entered incorrect password.`);
          break;
        case 'auth/user-not-found':
          alert(`No User associated with entered email.`);
          break;
        default:
          console.log(err);
          break;
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have user account?</h2>
      <span>Sign-In with your Email & Password</span>

      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <MyButton type='submit' childern={'Sign In'}>
            Sign In
          </MyButton>
          <MyButton
            onClick={handleSignInWithGoogle}
            childern={'Google Sign-in'}
            buttonType='google'
          >
            Google Sign-in
          </MyButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
