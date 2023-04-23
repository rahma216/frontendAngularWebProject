import { Evenement } from "./evenement";


export class UserForm {
  id: number;
  nom: string;
  email: string;
  age: number;
  typeUtilisateur: string;
  event: Evenement;

  constructor() {
    this.id = 13;
    this.nom = 'test';
    this.email = '';
    this.age = 0;
    this.typeUtilisateur = '';
    this.event = new Evenement();
  }
}
