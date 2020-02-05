import firebase from "firebase/app";
import { config } from "./firebaseConfig";
import "firebase/firestore";

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.firestore();
  }

  getData = (collection, doc, callback) => {

    this.db
      .collection(collection)
      .doc(doc)
      .onSnapshot(function(doc) {
        callback([doc.data()])
      })
  };
}

export default new Firebase();