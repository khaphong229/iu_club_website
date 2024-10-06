import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchIntroduction = async () => {
    const aDocumentId = 'JkjkYxdvltY3DYNQUJGm';
    const docReference = doc(db, 'introduction', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data();     
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
