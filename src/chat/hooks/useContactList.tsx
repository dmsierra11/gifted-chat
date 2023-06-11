import {useEffect, useState} from 'react';
import {getContactList} from '../api/contacts';
import {Contact} from '../api/contacts';

const useContactList = () => {
  const [chatData, setChatData] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const contacts = await getContactList();
      setChatData(contacts || []);
    };

    fetchData();
  }, []);

  return chatData;
};

export default useContactList;
