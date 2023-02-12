import { useState } from "react";

const useLocalStorage = (id) => {
  const key = `item_${id}`;
  const [valueStorage, setValueStorage] = useState(() => {
    const listOfLikes = JSON.parse(localStorage.getItem("likes"));
    let localStorageItem = false;
    if (listOfLikes?.length)
      for (let like of listOfLikes) {
        if (like[key]) localStorageItem = like[key];
      }

    return localStorageItem;
  });

  const persistenciaData = (value) => {
    try {
      let listOfLikes = JSON.parse(localStorage.getItem("likes")) || [];

      const indexOfrepet = listOfLikes.findIndex(
        (like) => like[key] !== undefined
      );
      indexOfrepet >= 0 && listOfLikes.splice(indexOfrepet, 1);
      const copy = [...listOfLikes, { [key]: value }];

      localStorage.setItem("likes", JSON.stringify(copy));
      setValueStorage(value);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    valueStorage,
    persistenciaData,
  };
};

export default useLocalStorage;
