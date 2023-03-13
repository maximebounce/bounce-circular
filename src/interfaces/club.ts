import type { ICollect } from './collect';
import type { IContact } from './contact';
import type { IMember } from './member';

export type IClub = {
  clubId: string;
  clubName: string;
  title?: string;
  startingDate?: string;
  numberCollects?: string;
  numberCollectsAvailable?: string;
  contact?: IContact;
  members?: IMember[];
  collects?: ICollect[];
  details?: string;
  localisation?: string;
  initial?: string;
};
