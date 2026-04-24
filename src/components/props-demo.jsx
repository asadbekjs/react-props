import AllTypesComponent from "./all-types-component";

function PropsDemo() {
  const user = { name: "Ali", age: 25 };
  const handleClick = () => alert("Bosildi!");
  const colors = ["qizil", "yashil", "ko'k"];

  return (
    <AllTypesComponent
      // ─── String ───────────────────────────────
      title="Salom Dunyo"
      // ─── Number ───────────────────────────────
      count={42}
      price={99.9}
      // ─── Boolean ──────────────────────────────
      isActive={true}
      // isActive             // ← bu ham true degan gap!
      isDisabled={false}
      // ─── Object ───────────────────────────────
      user={user}
      style={{ color: "red" }}
      // ─── Array ────────────────────────────────
      colors={colors}
      ids={[1, 2, 3]}
      // ─── Funksiya ─────────────────────────────
      onClick={handleClick}
      onSubmit={(data) => console.log(data)}
      // ─── JSX / Component ──────────────────────
      icon={<span>🚀</span>}
      header={<h1>Sarlavha</h1>}
    />
  );
}

export default PropsDemo;
