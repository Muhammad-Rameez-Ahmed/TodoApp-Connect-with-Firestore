import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Config from './Config';


firebase.initializeApp(Config)


const db =firebase.firestore();
export  {db}