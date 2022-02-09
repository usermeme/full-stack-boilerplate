import { TonalPaletteEnum, TonalColorEnum } from "./enums";

export type TonalPalette = Record<
  TonalPaletteEnum,
  Record<TonalColorEnum, string>
>;
