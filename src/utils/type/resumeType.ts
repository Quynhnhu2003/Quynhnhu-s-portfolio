export type resumeItemType = {
  header: string;
  id: string;
  list_item: itemType[];
};

export type itemType = {
  id: string;
  title: string;
  yearStart: string;
  yearEnd: string;
  location: {
    title?: string;
    title1?: string;
    title2?: string;
    title3?: string;
    address?: string;
  };  
  tech:string
  position?: string;
  detailsProject?: string;
  link?:string;
};
