
  import { initializeApp } from 'firebase/app';
  import { getAnalytics } from 'firebase/analytics';
  import { getAuth } from 'firebase/auth';
  import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyClt1wXW0e-vPBZp0eMtyhKxIKdtjNPwEU",
  authDomain: "momos-chat-2dba8.firebaseapp.com",
  projectId: "momos-chat-2dba8",
  storageBucket: "momos-chat-2dba8.appspot.com",
  messagingSenderId: "1075066654972",
  appId: "1:1075066654972:web:3d7f17258694a5239d4779",
  measurementId: "G-RXGNG4WE2X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { analytics, auth, db };
