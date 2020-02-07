import firebase from "firebase/app";
import { config } from "./firebaseConfig";
import "firebase/firestore";
// import shortid from "shortid";

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.firestore();
  }

  sortAZ = arr => {
    return arr.sort((a, b) => {
      const nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      return nameA === nameB ? 0 : nameA < nameB ? -1 : 1;
    });
  };

  getData = (collection, doc, callback) => {
    this.db
      .collection(collection)
      .doc(doc)
      .onSnapshot(doc => {
        // console.log(typeof doc.data(), doc.data());
        const keysArr = Object.values(doc.data());
        // console.log()
        callback(this.sortAZ(keysArr));
      });
  };

  // temp method to reorganize DB
  // mutation = (collection, doc) => {

  //   let o = {}
  //   names.forEach((el, i) => {
  //     let id = shortid.generate()
  //     o[id] = {
  //       name: el,
  //       description: desc[i],
  //       id
  //     }
  //   })

  //   this.db
  //     .collection(collection)
  //     .doc(doc)
  //     .set(o)
    
  // };
}

export default new Firebase();
