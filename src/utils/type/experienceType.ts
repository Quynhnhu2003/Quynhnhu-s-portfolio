export type ExperienceItemType = {
  id: string;
  header: string;
  position: string;
  time:string;
  list_item: ExperienceType[];
};

export type ExperienceType = {
  id: string;
  content: string;
};
