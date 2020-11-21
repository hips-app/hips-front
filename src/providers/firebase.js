import firebase from 'firebase';

const STORAGE_COMPANY_LOGOS_FOLDER = '/IMAGES/COMPANY-LOGOS';

const init = () => {
  return firebase.initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
  });
};

const uploadFile = async (path, file) => {
  if (!file) {
    throw new Error('File is empty');
  }
  const baseStorageFolder = process.env.VUE_APP_FIREBASE_STORAGE_ROOT_FOLDER;
  const snapshot = await firebase
    .storage()
    .ref(`${baseStorageFolder}${path}/${new Date().getTime()}_${file.name}`)
    .put(file);
  return snapshot.ref.getDownloadURL();
};

export default {
  STORAGE_COMPANY_LOGOS_FOLDER,
  init,
  uploadFile,
};
