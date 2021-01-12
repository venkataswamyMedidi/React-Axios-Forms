import React from "react";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

export default class UserList extends React.Component {
  render() {
    const renderUsers = users.map(({ id, name }) => {
      return (
        <li key={id}>
          {/* key={id} */}
          {name}
        </li>
      );
    });
    return <ul>{renderUsers}</ul>;
  }
}
