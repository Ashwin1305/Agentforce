export type Agent = {
  link: string;
  id: string;
  name: string;
  subject: string;
  description: string;
  imageUrl: string;
  category: string;
  supportEmail: string;
  publishedDate: string;
  teamIds?: string[]; 
  accessLevel: string;
};
