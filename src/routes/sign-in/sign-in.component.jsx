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

const SignIn = () => {
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
    <div>
      <h2>Sign In Component</h2>
      <MyButton
        buttonType='google'
        onClick={() => logGoogleUser()}
        childern={'Sign In with Google Popup'}
      >
        Sign In with Google Popup
      </MyButton>
      <MyButton
        onClick={signInWithGoogleRedirect}
        childern={'SignIn using G Redirect'}
      >
        Sign In with Google Redirect
      </MyButton>
      <hr />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
