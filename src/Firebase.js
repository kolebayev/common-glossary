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
        const keysArr = Object.values(doc.data());
        callback(this.sortAZ(keysArr));
      });
  };

  globalSearch = (arr, query, callback) => {
    let fetched = [];

    arr.forEach(el => {
      this.db
        .collection(el[0])
        .doc(el[1])
        .onSnapshot(doc => {
          let filtered = Object.values(doc.data()).filter( el => {
            return (el.name.toLowerCase().includes(query) || el.description.toLowerCase().includes(query));
          });
          filtered.length > 0 && fetched.push(...filtered);
        });
    });
    
    callback(fetched)
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



