import type { ICollect } from './collect';
import type { IContact } from './contact';

export type IClub = {
  clubId: string;
  clubName: string;
  title?: string;
  startingDate?: string;
  numberCollects?: string;
  contact?: IContact;
  collects?: ICollect[];
  details?: string;
  localisation?: string;
  initial?: string;
};
