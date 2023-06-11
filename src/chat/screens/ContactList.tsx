import React from 'react';
import useContactList from '../hooks/useContactList';
import ContactList from './components/ContactList';
import {ContactWithId} from '../types';

export default function ContactListScreen() {
  const data: ContactWithId[] = useContactList();
  return <ContactList data={data} />;
}
