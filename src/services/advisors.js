import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchAdvisors = async () => {
    const aDocumentId = '6TlwRnzgYvQBW4vNmqRY';
    const docReference = doc(db, 'advisors', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data(); 
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
