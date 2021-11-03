import firebase from 'firebase'
import{firebaseConfig} from '../firebase/firebaseConfig.js'

export const firebaseApp = firebase.initializeApp(firebaseConfig);
