import { IStyle } from "./IStyle";
import { IMood } from "./IMood";
import { IPalette } from "./IPalette";

export interface IPerfume {
  perfume_name: string;
  brand: string;
  capacity: string;
  price: string;
  vitality: string;
  colors: [IPalette];
  styles: [IStyle];
  moods: [IMood];
  top: string;
  middle: string;
  base: string;
  perfume_img: string;
  palette_id: [IPalette];
  palette_image: [IPalette];
}

export interface IPerfumeInputDTO {
  perfume_name: string;
  brand: string;
  capacity: string;
  price: string;
  vitality: string;
  colors: [IPalette];
  styles: [IStyle];
  moods: [IMood];
  top: string;
  middle: string;
  base: string;
  perfume_img: string;
  palette_id: [IPalette];
  palette_image: [IPalette];
}

