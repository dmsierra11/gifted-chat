import React from 'react';
import {Box, FlatList, Heading} from 'native-base';
import {ContactListProps} from '../../types';
import {ContactListItem} from './ContactListItem';

export default function ContactList({data}: ContactListProps) {
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading>
      <FlatList
        data={data}
        renderItem={({item}) => <ContactListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
