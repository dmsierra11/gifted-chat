import {db} from '../../../firebase';
import {collection, addDoc, getDocs, query, orderBy} from 'firebase/firestore';
import {Contact, ContactWithId} from '../types';

// Function to create a new document in Firestore
async function createContactDocument(contact: Contact) {
  try {
    const timeStamp = new Date().getTime();

    // Set the fields of the document
    await addDoc(collection(db, 'contacts'), {
      fullName: contact.fullName,
      recentText: contact.recentText,
      avatarUrl: contact.avatarUrl,
      timeStamp,
    });

    console.log('Contact document created successfully!');
  } catch (error) {
    console.error('Error creating contact document:', error);
  }
}

async function getContactList() {
  try {
    const q = query(collection(db, 'contacts'), orderBy('timeStamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const contacts: ContactWithId[] = [];
    querySnapshot.forEach(doc => {
      contacts.push({...(doc.data() as Contact), id: doc.id} as ContactWithId);
    });
    return contacts;
  } catch (error) {
    console.error('Error fetching contact list:', error);
    return [];
  }
}

export {createContactDocument, getContactList};
