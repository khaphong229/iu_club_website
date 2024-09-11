import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchTeamProjects = async () => {
    const aDocumentId = 'cbnpZo1IPndlHBJkB9Mt';
    const docReference = doc(db, 'team_projects', aDocumentId);
    const docSnapShot = await getDoc(docReference);

    if (docSnapShot.exists()) {
        const docData = docSnapShot.data();     
        return docData;
    } else {
        console.log("No such document!");
        return null;
    }
};
