declare type BadgeTechnologyType = {
  icon: string;
  label: string;
};

declare type ProjectCardType = {
  id: number;
  title: string;
  description: string;
  icon: string;
  technology: BadgeTechnologyType[];
};
