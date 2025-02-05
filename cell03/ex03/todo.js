document.addEventListener("DOMContentLoaded", () => {
    const ftList = document.getElementById("ft_list");
    const newTaskBtn = document.getElementById("new_task");

    // โหลดรายการ To-Do จาก cookies
    function loadTasks() {
        let tasks = getCookie("todo_list");
        if (tasks) {
            tasks = JSON.parse(tasks);
            tasks.reverse().forEach(task => addTaskToDOM(task));
        }
    }

    // เพิ่ม To-Do ลงใน DOM
    function addTaskToDOM(task) {
        const div = document.createElement("div");
        div.textContent = task;
        div.classList.add("todo-item");
        div.addEventListener("click", () => removeTask(div, task));
        ftList.prepend(div);
    }

    // ลบ To-Do จาก DOM และ cookies
    function removeTask(element, task) {
        if (confirm("Are you sure you want to remove this task?")) {
            element.remove();
            let tasks = getCookie("todo_list");
            tasks = tasks ? JSON.parse(tasks) : [];
            tasks = tasks.filter(t => t !== task);
            setCookie("todo_list", JSON.stringify(tasks), 7);
        }
    }

    // ฟังก์ชันเพิ่ม To-Do ใหม่
    newTaskBtn.addEventListener("click", () => {
        const task = prompt("Enter a new TO DO:");
        if (task) {
            addTaskToDOM(task);
            let tasks = getCookie("todo_list");
            tasks = tasks ? JSON.parse(tasks) : [];
            tasks.push(task);
            setCookie("todo_list", JSON.stringify(tasks), 7);
        }
    });

    // ฟังก์ชันจัดการ cookies
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return value;
        }
        return null;
    }

    // โหลดรายการ To-Do เมื่อเปิดหน้าเว็บ
    loadTasks();
});

