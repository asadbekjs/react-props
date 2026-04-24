const UserCard = ({ name, age, isMillionare, score }) => {
  // console.log(props); // object
  // object destructuring
  // const { name, age } = props;
  // console.log(name, age);

  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Millionare: {isMillionare ? "Yes" : "No"}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default UserCard;
