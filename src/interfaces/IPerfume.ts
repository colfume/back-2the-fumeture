import { IStyle } from "./IStyle";
import { IMood } from "./IMood";
import { IPalette } from "./IPalette";
import { IColor } from "./IColor";

export interface IPerfume {
  perfume_number: number;
  perfume_name: string;
  brand: string;
  capacity: string;
  price: string;
  colors: [IColor];
  styles: [IStyle];
  moods: [IMood];
  top: string;
  middle: string;
  base: string;
  perfume_img: string;
  palette_id: [IPalette];
  palette_img: string;
}

export interface IPerfumeInputDTO {
  perfume_number: number;
  perfume_name: string;
  brand: string;
  capacity: string;
  price: string;
  colors: [IColor];
  styles: [IStyle];
  moods: [IMood];
  top: string;
  middle: string;
  base: string;
  perfume_img: string;
  palette_id: [IPalette];
  palette_img: string;
}
