function AllTypesComponent({
  title,
  count,
  price,
  isActive,
  isDisabled,
  user,
  style,
  colors,
  ids,
  onClick,
  onSubmit,
  icon,
  header,
}) {
  //   console.log(props); // object
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <p>Price: {price}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <p>Disabled: {isDisabled ? "Yes" : "No"}</p>
      <p>User: {user.name}</p>
      <p>Style: {style.color}</p>
      <p>Colors: {colors.join(", ")}</p>
      <p>IDs: {ids.join(", ")}</p>
      <button onClick={onClick}>Click</button>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      {icon}
    </div>
  );
}

export default AllTypesComponent;
