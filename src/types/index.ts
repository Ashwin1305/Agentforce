export type Agent = {
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
