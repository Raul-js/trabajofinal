import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  /**
   
   */
  getProductos(){
    return this.firestore.collection("Producto").snapshotChanges();
  }

  /**
   * 
   * @param estudiante estudiante a crear
   */
  createProductos(Producto:any){
    return this.firestore.collection("Producto").add(Producto);
  }

  /**
   * @param id id de la coleccion en firebase
   * @param Producto a actualizar
   */
  updateProductos(id:any, Producto:any){
    return this.firestore.collection("Producto").doc(id).update(Producto);
  }


  /**
   
   * @param id id de la coleccion en firebase
   */
  deleteProductos(id:any){
    return this.firestore.collection("Producto").doc(id).delete();

  }
}
