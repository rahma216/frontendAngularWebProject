import { Categorie } from "./categorie";
import { UserForm } from "./user-form";

export class Evenement {
  id!: number;
  nom!: string;
  date!: Date;
  lieu!: string;
  description!: string;
  capacite!: number;
  organisateur!: string;
  categoriesList!: Categorie[] ;
  userForm!: UserForm[] ;
}
