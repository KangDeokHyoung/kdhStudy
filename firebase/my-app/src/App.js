import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore";
//npm install --save firebase 설치

const App = () => {
  // const []
  const [users, setUsers] = useState([]);
  console.log(users);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const usersCollectionRef = collection(db, "todos");
  const getTodos = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((el) => ({ ...el.data(), id: el.id })));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    getTodos();
  };

  const updateUser = async (id, age) => {
    const usersDoc = doc(db, "todos", id);
    const newFields = { age: age + 1 };
    await updateDoc(usersDoc, newFields);
    getTodos();
  };

  const deleteUser = async (id) => {
    const usersDoc = doc(db, "todos", id);
    await deleteDoc(usersDoc);
    getTodos();
  };

  return (
    <div>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} />
      <button onClick={createUser}>추가</button>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            <div>{el.addCard || "-"}</div>
            <div>{el.age || "-"}</div>
            <button onClick={() => updateUser(el.id, el.age)}>업데이트</button>
            <button onClick={() => deleteUser(el.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
