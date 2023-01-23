import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD6wxZr45luZRKDUMAAVSnVOGwTjgQyrnk",
	authDomain: "crwn-clothing-db-2bc9f.firebaseapp.com",
	projectId: "crwn-clothing-db-2bc9f",
	storageBucket: "crwn-clothing-db-2bc9f.appspot.com",
	messagingSenderId: "596356026557",
	appId: "1:596356026557:web:879bc230622d296e22a7d4",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	console.log(userSnapshot);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
			});
		} catch (error) {
			console.log("error");
		}
	}

	return userDocRef;
};
