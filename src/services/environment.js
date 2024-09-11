import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchEnvironment = async () => {
    const aDocumentId = 'HbygmoY6Pq4iG7URLioG';
    const docReference = doc(db, 'evironment', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data();     
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
