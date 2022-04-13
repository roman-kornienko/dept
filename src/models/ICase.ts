export interface ICase {
  id: number;
  image?: string;
  main?: boolean;
  title?: string;
  industry?: string;
  category?: string;
}

export interface ICaseWithLinkedItems extends ICase {
  linkedItem?: ICase;
}
