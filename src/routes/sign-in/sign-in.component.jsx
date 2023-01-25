import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>sign in template</span>
			<button onClick={logGoogleUser}>Sign In with Google Popup</button>

			<SignUpForm />
		</div>
	);
};

export default SignIn;
