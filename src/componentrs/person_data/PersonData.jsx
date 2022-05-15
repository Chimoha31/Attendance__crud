import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from '../firebase/Firebase';

const personRef = collection(db, "persons");

class PersonData {
  
  addPersons = (newPerson) => {
    return addDoc(personRef, newPerson);
  }

  updatePerson = (id, updatePerson) => {
    const personDoc = doc(personRef, id); //エラー出たら先にここを疑う！
    return updateDoc(personDoc, updatePerson);
  }

  deletePerson = (id) => {
    const personDoc = doc(personRef, id);   //エラー出たら先にここを疑う！
    return deleteDoc(personDoc);
  }

  getAllPerson = () => {
    return getDocs(personRef);
  }

  getPerson = (id) => {
    const personDoc = doc(personRef, id);  //エラー出たら先にここを疑う！
    return getDoc(personDoc);
  }
}


export default new PersonData();