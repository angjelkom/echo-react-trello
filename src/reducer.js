
import { DECREMENT, INCREMENT, NEW_BOARD, NEW_TODO, TOGGLE_TODO, NEW_LIST, BOARD_TITLE, DELETE_LIST, DELETE_BOARD, DELETE_COMPLETED } from './actions';

const UID = () => {
    let p = (Math.random().toString(16)+"000000000").substr(2,8);
    return p.substr(0,4) + "-" + p.substr(4,4);
}

const reducer = (state = {title: '', boards: [], lists: [], todos: []}, action) => {
    switch(action.type){
        case NEW_LIST:
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        id: UID(),
                        title: action.title,
                        boardId: action.boardId
                    }
                ]
            }
        case NEW_BOARD:
            return {
                ...state,
                boards: [
                    ...state.boards,
                    {
                        id: UID(),
                        name: action.name
                    }
                ]
            }

        case NEW_TODO:
        return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: UID(),
                        text: action.text,
                        completed: false,
                        listId: action.listId,
                        boardId: action.boardId
                    }
                ]
            }
        case TOGGLE_TODO:
        return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.todoId ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo;
                })
            }
        case BOARD_TITLE:
        return {
                ...state,
                title: action.title
            }
        case DELETE_LIST:
        return {
            ...state,
            lists: state.lists.filter(list => list.id !== action.listId),
            todos: state.todos.filter(todo => todo.listId !== action.listId)
        }
        case DELETE_BOARD:
        return {
            ...state,
            boards: state.boards.filter(board => board.id !== action.boardId),
            lists: state.lists.filter(list => list.boardId !== action.boardId),
            todos: state.todos.filter(todo => todo.boardId !== action.boardId)
        }
        case DELETE_COMPLETED:
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
        }
        default:
            return state;
    }
}

export default reducer;