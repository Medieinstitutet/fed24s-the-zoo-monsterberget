import { Animals } from "./Animals";
export type AnimalAction = 
| {type: "SET_ANIMALS"; payload: Animals[]}
| {type: "FEED_ANIMAL"; payload: Animals }; 
