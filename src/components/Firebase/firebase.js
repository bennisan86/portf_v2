import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.strg = app.storage();
  }
  message = uid => this.db.ref(`messages/${uid}`);
  messages = () => this.db.ref('messages');
  
  project = uid => this.db.ref(`projects/${uid}`);
  projects = () => this.db.ref('projects');

  covers = () => this.strg.ref('covers/');
  varref = (hier) => this.strg.ref(hier);
}

export default Firebase;