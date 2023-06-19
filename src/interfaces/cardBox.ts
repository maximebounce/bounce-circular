import type { IMember } from './member';

export type INewOrderCardBox = {
  clubId: string;
  clubName: string;
  numberOfBox: string;
  description?: string;
  urlRedirect?: string;
  member?: IMember;
};
