import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchQuestionsAndAnswers = async () => {
    const aDocumentId = 'FD5rLZwyJEJUz8TRmfBt';
    const docReference = doc(db, 'questions_and_answers', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data();     
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
