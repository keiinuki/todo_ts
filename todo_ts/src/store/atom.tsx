import { atom } from "recoil"

export const todoListState = atom<string[]>({
    key: 'todoListState',
    default: []
  });  

export const completeTodoListState = atom<string[]>({
    key: 'completeTodoListState',
    default: []
  });