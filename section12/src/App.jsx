import "./App.css";
import { useReducer, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoding, setIsLoding] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  //const idRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "diary"));
        const diaryData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        dispatch({
          type: "INIT",
          data: diaryData,
        });
      } catch (e) {
        console.error("Error fetching data: ", e);
      } finally {
        setIsLoding(false);
      }
    };
    fetchData();
  }, []);

  // 새로운 일기 추가
  const onCreate = async (createdDate, emotionId, content) => {
    const newData = {
      createdDate,
      emotionId,
      content,
    };

    try {
      const docRef = await addDoc(collection(firestore, "diary"), newData);
      dispatch({
        type: "CREATE",
        data: {
          id: docRef.id,
          ...newData,
        },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // 기존 일기 수정
  const onUpdate = async (id, createdDate, emotionId, content) => {
    const updatedData = {
      createdDate,
      emotionId,
      content,
    };

    try {
      const docRef = doc(firestore, "diary", id);
      await updateDoc(docRef, updatedData);

      dispatch({
        type: "UPDATE",
        data: {
          id,
          ...updatedData,
        },
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // 기존 일기 삭제
  const onDelete = async (id) => {
    try {
      const docRef = doc(firestore, "diary", id);
      await deleteDoc(docRef);
      dispatch({
        type: "DELETE",
        id,
      });
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  if (isLoding) {
    return <div>데이터 로딩중입니다람쥐...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
