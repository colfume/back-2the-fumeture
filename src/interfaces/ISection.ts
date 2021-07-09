import { IPerfume } from "./IPerfume";

export interface ISection {
  section_name: string;
  section_perfumes: [IPerfume];
}

export interface ISectionInputDTO {
  section_name: string;
  section_perfumes: [IPerfume];
}