import {
  signInWithGooglePopup,
  CreateUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();

  const userDocRef = await CreateUserDocumentFromAuth(user);
  console.log(userDocRef);
};

const SignIn = () => {
  return (
    <div>
      <h2>Sign In Component</h2>

      <button onClick={() => logGoogleUser()}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
