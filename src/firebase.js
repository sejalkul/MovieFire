import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBo1xSSGCsJaMnsVvQW6qJkwd8nBY92zRM",
    authDomain: "fir-auth-movie.firebaseapp.com",
    projectId: "fir-auth-movie",
    storageBucket: "fir-auth-movie.appspot.com",
    messagingSenderId: "168822247909",
    appId: "1:168822247909:web:cc80bb51fda382e50a9f0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;