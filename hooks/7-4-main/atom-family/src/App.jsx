import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";
function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} /> {/* each {id}=1  & {id}=2   need own atom  */}
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}
function Todo({ id }) {
  //remember to pass   id   as prop in use case of atomFamily

  const todo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {todo.title} <br />
      {todo.description} <br /> <br />
    </>
  );
}

export default App;
