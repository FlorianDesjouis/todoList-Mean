{
    'use strict';

    new Vue({
        el: 'main#app',
        data: {
            tasks: [
                {title: "Grab some popcorn", isDone: true},
                {title: "Watch Rick and Morty", isDone: true},
                {title: "Go to the shower", isDone: false}
            ],
            title: ""
        },

        methods: {
            remaining: function () {
                var remains = 0;
                this.tasks.forEach(function (task) {
                    if (task.isDone === false) {
                        remains++;
                    }
                });
                return remains;
            },

            deleteTask: function (index) {
                Vue.delete(this.tasks, index);
            },

            addTask: function (title) {
                if (title !== "") {
                    Vue.set(this.tasks, this.tasks.length, {title, isDone: false});
                    localStorage.setItem("tasks", JSON.stringify(this.tasks));
                }
            }
        }
    });
}