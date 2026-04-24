import Button from "./components/button";
import Card from "./components/card";
import Modal from "./components/modal";
import PropsDemo from "./components/props-demo";
import UserCard from "./components/user-card";
import TaskItem from "./components/task-item";

const App = (props) => {
  // console.log(props); // object

  // App component - parent component
  // UserCard component - child component
  const taskProps = {
    title: "React o'rganish",
    priority: "high",
    isDone: false,
  };

  return (
    <div>
      <h2 className="title">Props in React</h2>
      <UserCard
        name="Alisher Usmonov"
        age={72}
        isMillionare={true}
        score={100}
      />
      <PropsDemo />
      <Button>Save</Button>
      <Button variant="danger" size="lg" onClick={() => alert("Deleted!")}>
        Delete
      </Button>
      <Button variant="secondary" size="sm" isDisabled>
        Submit
      </Button>
      <Card title="User info" footer={<Button size="sm">Edit</Button>}>
        <p>Ism: Alisher Umarov</p>
        <p>Email: alisher@example.com</p>
        <p>Rol: Admin</p>
      </Card>
      <Modal isOpen={true} title="Yangi vazifa" onClose={() => {}}>
        <p>Bu yerda forma yoki boshqa content bo'lishi mumkin</p>
        <Button variant="primary">Saqlash</Button>
      </Modal>
      {/* <TaskItem
        title={taskProps.title}
        priority={taskProps.priority}
        isDone={taskProps.isDone}
      /> */}
      <TaskItem {...taskProps} />
    </div>
  );
};

export default App;
