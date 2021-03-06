import { CityDTO } from "./city.dto";

export interface AddressDTO {
    id : string;
    logradouro : string;
    number : string;      
    complement : string;  
    neighborhood : string;
    postalCode : string;
    city : CityDTO;
}