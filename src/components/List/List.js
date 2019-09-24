import React from "react";
import ListItem from "../ListItem/ListItem";

const List = props => {
  const { items } = props;

  return items.length > 0 ? (
    items.map(item => <ListItem key={item.id} {...item} />)
  ) : (
      <div className="no-items"> No items found.</div>
    );
};
export default List;
