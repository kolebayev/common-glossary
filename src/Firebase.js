import firebase from "firebase/app";
import { config } from "./firebaseConfig";
import "firebase/firestore";

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.firestore();
  }

  getData = (collection, doc) => {
    this.db
      .collection(collection)
      .doc(doc)
      .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
      });
      // .get()
      // .then(function(doc) {
      //   if (doc.exists) {
      //     console.log("Document data:", doc.data());
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }
      // })
      // .catch(function(error) {
      //   console.log("Error getting document:", error);
      // });
  };
}

export default new Firebase();