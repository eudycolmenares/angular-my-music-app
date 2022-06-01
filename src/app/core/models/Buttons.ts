export interface ButtonProperties {
  tag: 'a' | 'button';
  class: string;
  disabled: boolean;
  text?: string
  action?: Function;
  url?: string;
  //
  childI?: boolean;
  classI?: string;
  //
  childImage?: boolean;
  classImage?: string;
  urlImage?: string;
  altImage?: string;
}
