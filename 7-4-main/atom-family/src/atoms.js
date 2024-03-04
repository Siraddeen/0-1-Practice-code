import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});

/*

both syntax do the same work              learn to use   .find()

return TODOS.find((x) => x.id === id);

const foundTodo = null
for(let i = 0 ; i<TODOS.length;i++){
    if(TODOS[i].id===id){
        foundTodo= TODOS[i]
    }
    return foundTodo
}


*/
