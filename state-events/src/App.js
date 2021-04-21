import AlertButton from "./components/AlertButton";
import CountButton from "./components/CountButton";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import ReverseButton from "./components/ReverseButton";

const reverseButtonProps = {
  firstText: "Нажми меня",
  secondText: "Убей меня",
};

function App() {
  // AlertButton({ messsage: "Вот ты и попался, сука", children: "Нажми меня" });
  return (
    <div className="App">
      <ToDoList title="Список учебных материалов" />
      {/* <Counter /> */}
      {/* <CountButton />
      <ReverseButton {...reverseButtonProps} /> */}
      {/* <AlertButton message="Вот ты и попался, сука">Нажми меня</AlertButton> */}
      {/* <AlertButton message="Погладь меня, сука">Погладь меня</AlertButton> */}
    </div>
  );
}

export default App;
