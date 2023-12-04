import { app } from "~/plugins/appConfig";

// firestore
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  orderBy,
  updateDoc,
  increment,
  limit,
  where,
  getCountFromServer,
  startAt,
} from "firebase/firestore";

const db = getFirestore(app);

class boardItemsAPI {
  // boardItem 전체 불러오기
  getAllBoardItems = async (
    collectionName = "board",
    queryData = null,
    count,
    [orderType, orderValue]
  ) => {
    try {
      const queryConstraints = [];
      if (queryData) {
        for (const [key, value] of Object.entries(queryData)) {
          // console.log("key, value:", key, value);
          if (typeof value === "object") {
            queryConstraints.push(where(key, value[0], value[1], value[2]));
          } else {
            queryConstraints.push(where(key, "==", value));
          }
        }
      }
      if (count) queryConstraints.push(limit(count));
      if (orderType) queryConstraints.push(orderBy(orderType, orderValue));
      // 최종 쿼리
      const q = query(collection(db, collectionName), ...queryConstraints);
      const snapshot = await getDocs(q);
      if (snapshot) {
        const boardItems = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });
        return boardItems;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // boardItem 디테일 불러오기
  getBoardItem = async (collectionName = "board", [key = "id", id]) => {
    try {
      const q = query(collection(db, collectionName), where(key, "==", id));
      const snapshot = await getDocs(q);
      if (snapshot) {
        const docs = snapshot.docs.map(async (doc) => {
          return {
            ...doc.data(),
          };
        });

        return docs[0];
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // id 구하기
  getDocItem = async (collectionName = "board", [key = "docId", id]) => {
    try {
      const q = query(collection(db, collectionName), where(key, "==", id));
      const snapshot = await getDocs(q);
      if (snapshot) {
        const docs = snapshot?.docs.map((doc) => {
          return {
            id: doc.id,
          };
        });
        return docs[0].id;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // collection의 글 갯수 구하기
  // 글 갯수를 수정하면 no가 덮어져서 count가 아니라 변경됨
  // getBoardCount = async () => {
  //   const col = collection(db, collectionName);
  //   const snapshot = await getCountFromServer(col);
  //   const count = snapshot.data().count;
  //   return count;
  // };

  // boardItem 추가
  addBoardItem = async (collectionName = "board", data) => {
    const response = new Promise(async (resolve, reject) => {
      try {
        const docRef = await addDoc(collection(db, collectionName), data);
        if (docRef) {
          return resolve(true);
        }
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };

  // boardItem 삭제
  removeBoardItem = async (collectionName = "board", [key = "docId", id]) => {
    if (!id) throw new Error("id가 없습니다");
    const response = new Promise(async (resolve, reject) => {
      const docId = await this.getDocItem(collectionName, [key, id]);
      try {
        await deleteDoc(doc(db, collectionName, docId));
        return resolve(true);
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };

  // boardItem 수정
  updateBoardItem = async (
    collectionName = "board",
    [key = "docId", id],
    data
  ) => {
    if (!id) throw new Error("id가 없습니다");
    const response = new Promise(async (resolve, reject) => {
      const docId = await this.getDocItem(collectionName, [key, id]);
      try {
        await setDoc(doc(db, collectionName, docId), data);
        return resolve(true);
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };

  // 게시판의 카테고리 불러오기
  getCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "boardCategories"));
      if (snapshot) {
        const boardItems = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });

        return boardItems;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // 한 값만 변형
  updateItemValue = async (
    collectionName = "board",
    [docKey = "docId", id],
    key,
    value
  ) => {
    const docId = await this.getDocItem(
      collectionName,
      [docKey, id],
      [key, value]
    );
    if (docId) {
      const ref = doc(db, collectionName, docId);
      const response = new Promise(async (resolve, reject) => {
        try {
          await updateDoc(ref, {
            [key]: value,
          });
          return resolve(true);
        } catch (error) {
          return reject(false);
        }
      });
      return response;
    }
  };

  // 조회수 추가
  incrementViewer = async (collectionName = "board", [key = "docId", id]) => {
    const docId = await this.getDocItem(collectionName, [key, id]);
    if (docId) {
      const ref = doc(db, collectionName, docId);
      updateDoc(ref, {
        viewer: increment(1),
      });
    }
  };
}

export default new boardItemsAPI();
