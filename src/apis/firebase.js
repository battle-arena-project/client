import * as firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD74ANQot4iwEVvL6KdvGCUxIsJFd8syuk",
  authDomain: "battle-arena-f388a.firebaseapp.com",
  projectId: "battle-arena-f388a"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
