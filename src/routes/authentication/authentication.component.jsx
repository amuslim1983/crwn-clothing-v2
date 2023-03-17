import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

import {
  auth,
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import MyButton from '../../components/my-button/my-button.component';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import './authentication.styles.scss';

const Authentication = () => {
  useEffect(() => {
    const loadRedirectResults = async () => {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await CreateUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    loadRedirectResults().catch(err => console.log(err));
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await CreateUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className='authentication-container'>
      <h2>Sign In Page</h2>
      <div className='authentication-forms-container'>
        <SignInForm />
        <SignUpForm />
      </div>

      <MyButton
        buttonType='google'
        onClick={() => logGoogleUser()}
        childern={'Sign In with Google Popup'}
        style={{ display: 'none' }}
      >
        Sign-In With Google
      </MyButton>
      <MyButton
        onClick={signInWithGoogleRedirect}
        style={{ display: 'none' }}
        childern={'SignIn using G Redirect'}
      >
        Sign In with Google Redirect
      </MyButton>
    </div>
  );
};

export default Authentication;
