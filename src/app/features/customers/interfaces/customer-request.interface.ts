import { AddressRequest } from "./address-request.interface";

export interface CustomerRequest {
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
  addresses: AddressRequest[];
}
