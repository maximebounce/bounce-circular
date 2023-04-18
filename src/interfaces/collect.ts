import type { IMember } from './member';

export type ICollect = {
  id: string;
  dateRequest: string;
  clubName: string;
  status?: string;
  dateCollect?: string;
  numberOfBox?: string;
};

export type INewCollect = {
  clubId: string;
  clubName: string;
  numberOfBox: string;
  dateCollect: string;
  description?: string;
  urlRedirect?: string;
  member?: IMember;
};
