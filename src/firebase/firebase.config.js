
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKeyM,
    authDomain: process.env.REACT_APP_authDomainM,
    projectId: process.env.REACT_APP_projectIdM,
    storageBucket: process.env.REACT_APP_storageBucketM,
    messagingSenderId: process.env.REACT_APP_messagingSenderIdM,
    appId: process.env.REACT_APP_appIdM,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app