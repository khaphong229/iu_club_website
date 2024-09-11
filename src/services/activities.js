import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchActivities = async () => {
    const aDocumentId = 'OEXFKVdClNoRUDIdduDA';
    const docReference = doc(db, 'activities', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data();     
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
