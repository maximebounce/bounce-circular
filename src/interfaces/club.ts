import type { ICollect } from './collect';

export type IClub = {
  clubId: string;
  clubName: string;
  title?: string;
  startingDate?: string;
  numberCollects?: string;
  collects?: ICollect[];
};
