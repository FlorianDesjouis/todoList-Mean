{
    'use strict';

    new Vue({
        el: 'main#app',
        data: {
            tasks: [],
            title: ""
        },

        methods: {
            showTasks: function(){
                var retrievedDatas = localStorage.getItem("tasks");
                this.tasks = JSON.parse(retrievedDatas)
            },

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
                localStorage.setItem("tasks", JSON.stringify(this.tasks));
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