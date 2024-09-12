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


//code hướng dẫn lấy data ra 

// import React, { useEffect, useState } from 'react';
// import { fetchAdvisors } from '../services/advisors';

// const Home = () => {
//   const [data, setData] = useState(null); // Chỉnh sửa state để lưu một object thay vì array

//   useEffect(() => {
//     const loadAdvisors = async () => {
//       const advisors = await fetchAdvisors();
//       setData(advisors); // Lưu dữ liệu trả về
//     };

//     loadAdvisors();
//   }, []);

//   return (
//     <div>
//       <h2>Cố Vấn</h2>
//       {data ? (
//         <ul>
//           <li>Tên: {data.tên}</li>
//           <li>Email: {data.email}</li>
//           {/* Các field khác có thể hiển thị tại đây */}
//         </ul>
//       ) : (
//         <p>Đang tải dữ liệu...</p>
//       )}
//     </div>
//   );
// };

// export default Home;
