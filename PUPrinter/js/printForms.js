import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
//prettier-ignore
import {getFirestore,collection,getDocs,addDoc,deleteDoc,doc,onSnapshot,query,where,orderBy,serverTimestamp,Timestamp,
getDoc,updateDoc} from "firebase/firestore";
//prettier-ignore
import {getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword} from "firebase/auth";
//prettier-ignore
export default class PrintForm {
  constructor(userID,colored,file) {
    this.userID = userID;
    this.colored = colored;
    this.file = file;
    this.fileUrl = this._generateFileUrl();
    this.amountToPay = this._generatePriceAmount();
    this.timestamp = this._generateTimestamp(); 
  }
  _generateFileUrl(){

  }
  _generatePinCode(){

  }
  _generatePriceAmount(){
    
  }
  _generateTimestamp(){

  }
  _exportFormToDB(){}
}
