import React, { useEffect, useState } from "react";
import List from "../../components/List/List";
import { getData } from "../../helpers/requests";
import { transformData } from "../../helpers/transform";

async function loadData(setError, setItems, setIsLoading) {
  const data = await getData();
  setError(data.error);
  setItems(transformData(data.items));
  setIsLoading(false);
}

const ListContainer = props => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData(setError, setItems, setIsLoading);
  }, []);

  const onClick = async e => {
    setIsLoading(true);
    props.onClick && props.onClick();
    loadData(setError, setItems, setIsLoading);
  };

  return (
    <>
      <input
        type="button"
        value="Refresh"
        className="button"
        onClick={onClick}
        disabled={isLoading}
      />
      {error ? <div className="error">{error}</div> : <List items={items} />}
    </>
  );
};

export default ListContainer;
