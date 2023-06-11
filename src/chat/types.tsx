export type Contact = {
  id?: string;
  fullName: string;
  timeStamp: string;
  recentText: string;
  avatarUrl: string;
};

export type ContactWithId = {
  id: string;
} & Contact;

export type ContactListProps = {
  data: ContactWithId[];
};
