declare type BadgeTechnologyType = {
  icon: string;
  label: string;
};

declare type ProjectCardType = {
  title: string;
  description: string;
  icon: string;
  technology: BadgeTechnologyType[];
};
