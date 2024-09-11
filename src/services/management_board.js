import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchManageBoard = async () => {
    const aDocumentId = 'PGJ6hD39W0QRTvvB2dbN';
    const docReference = doc(db, 'management_board', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data();     
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
