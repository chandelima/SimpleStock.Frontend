import { Gender } from '../../shared/enums/gender.enum'
import { EntityProperties } from '../../shared/interfaces/entity-properties.interface';

export const productProperties: EntityProperties = {
  singularName: "produto",
  pluralName: "produtos",
  gender: Gender.Male
}
