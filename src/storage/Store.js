const TODO_LIST_KEY = 'todo-list'
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(TODO_LIST_KEY) || '[]')
    },
    save(storage_val){
        window.localStorage.setItem(TODO_LIST_KEY,JSON.stringify(storage_val))
    }
}