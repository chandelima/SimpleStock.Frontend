import { AddressRequest } from "./address-request.interface";

export interface CustomerResponse {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
  addresses: AddressRequest[];
  createdAt: string;
}
