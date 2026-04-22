import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXJ3bX7902mMzahL6OaFS-KRKocRbq3pM",
    authDomain: "casideto-5d226.firebaseapp.com",
      projectId: "casideto-5d226",
        storageBucket: "casideto-5d226.firebasestorage.app",
          messagingSenderId: "946260121723",
            appId: "1:946260121723:web:b2a8032d83006a7bc4aade"
            };

            const app = initializeApp(firebaseConfig);
            export const db = getFirestore(app); // Esta línea es la que falta
            