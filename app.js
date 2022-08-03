const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      todoList: [
        {
          id: Math.round(Math.random() * 1_000_000_000),
          title: "Kahvaltı yapılacak.",
          completed: false,
        },
        {
          id: Math.round(Math.random() * 1_000_000_000),
          title: "Ders çalışılacak.",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(e) {
      newTodo = {
        id: Math.round(Math.random() * 1_000_000_000),
        title: e.target.value ? e.target.value : this.inputValue,
        completed: false,
      };
      this.todoList.push(newTodo);
      this.inputValue = "";
    },
    removeItem(id) {
      this.todoList = this.todoList.filter((todo) => {
        return todo.completed == true ? todo.id != id : this.todoList;
      });
    },
  },
  computed: {
    completedItemsCount() {
      return this.todoList.filter((todo) => todo.completed).length;
    },
    unCompletedItemsCount() {
      return this.todoList.filter((todo) => !todo.completed).length;
    },
  },
  watch: {},
}).mount("#app");
