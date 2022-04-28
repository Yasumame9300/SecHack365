
// Vue.js_生成
function createApp() {
	new Vue({
		el: "#wrapper",

		data: {
			filter: "inbox",
			todos: [{
				id: 1, //識別ID
				text: "手土産を買う",
				　　 //テキスト
				createdAt: 1650294706000, //時間(ミリ秒)
				done: false, //完了済か
				isEditing: false
			}, {
				id: 2,
				text: "企画書締め切り",
				createdAt: 1650294706000,
				done: false,
				isEditing: false
			}, {
				id: 3,
				text: "田中さんへ連絡",
				createdAt: 1650294706000,
				done: true,
				isEditing: false
			}],
			text: ""
		},
		computed: {
			todosLength: function() {
				return this.todos.length
			},
			filteredTodos: function() {
				const filter = this.filter
				return this.todos.filter(function(todo) {
					return filter === "completed" ? todo.done : !todo.done
				})
			},
			disabled: function() {
				return this.text === ""
			}
		},
		methods: {
  	deleteTodo: function(todo) {
    	var index = this.todos.indexOf(todo)
    	this.todos.splice(index, 1)
  	}
	},
		methods: {
			formatDate: function(timestamp) {
				const date = new Date(timestamp)

				// 年月日の取得
				　
				const year = date.getFullYear()
				const month = date.getMonth() + 1
				const day = date.getDate()
					// 表示
				return year + "." + month + "." + day
			},
			setFilter: function(filter) {
				this.filter = filter
			},
			handleSubmit: function() {
				this.addTodo(this.text)
				this.text = ""
			},

			addTodo: function(text) {
				this.todos.push({
					id: this.todosLength + 1,

					text: text,
					createdAt: Date.now(),

					done: false,
					isEditing: false

				})
			},


			editTodo: function(id) {
				this.todos = this.todos.map(function(todo) {
					if (todo.id === id) {
						todo.isEditing = true

					}
					return todo
				})
			},
			saveTodo: function(id) {
				this.todos = this.todos.map(function(todo) {
					if (todo.id === id) {
						todo.isEditing = false
					}
					return todo
				})
			},
		}
	})
}


// 初期化
function initialize() {
	createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
