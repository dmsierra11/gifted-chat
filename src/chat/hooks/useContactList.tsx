import {useEffect, useState} from 'react';
import {getContactList} from '../api/contacts';
import {ContactWithId} from '../types';

const useContactList = () => {
  const [chatData, setChatData] = useState<ContactWithId[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const contacts = await getContactList();
      setChatData(contacts);
    };

    fetchData();
  }, []);

  return chatData;
};

export default useContactList;
