import {Venue} from "./Venue"
import {Offers} from "./Offers"


export class Event {
    id!: number;
    artist_id!: number;
    name!: string;
    url!: string;
    on_sale_datetime!:string;
    description!: string;
    title!: string;
    venue!: Venue;
    lineup!:string[];
}