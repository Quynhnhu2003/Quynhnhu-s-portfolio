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
    title: string;
    address?: string;
  };
  position?: string;
  detailsProject?: string;
};
