import { atom } from 'recoil';

export const url = atom<string>({
  key: 'url',
  default: '',
});

export const downloading = atom<boolean>({
  key: 'downloading',
  default: false,
});
