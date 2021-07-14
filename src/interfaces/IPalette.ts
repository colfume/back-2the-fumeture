import { IMood } from "./IMood";

export interface IPalette {
  palette_name: string;
  palette_img: string;
  palette_title: string;
  palette_keyword: [IMood];
  palette_matchColor: string;
  palette_explanation: string;
}

export interface IPaletteInputDTO {
  palette_name: string;
  palette_img: string;
  palette_title: string;
  palette_keyword: string;
  palette_matchColor: string;
  palette_explanation: string;
}
