export interface User {
  name: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export type Theme =
  | 'green'
  | 'red'
  | 'yellow'
  | 'background'
  | 'foreground'
  | 'sideBarText'
  | 'sideBarBackground';
