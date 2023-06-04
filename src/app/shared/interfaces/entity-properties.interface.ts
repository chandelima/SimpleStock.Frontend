import { Gender } from "../enums/gender.enum";

export interface EntityProperties {
  singularName: string;
  pluralName: string;
  gender: Gender;
}
