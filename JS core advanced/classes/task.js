'use strict';

class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(departmentName) {
        if (!this.departments.includes(departmentName)) {
            this.departments.push(departmentName);
        } else {
            console.log(`Факультет "${departmentName}" уже существует.`);
        }
    }

    removeDepartment(departmentName) {
        const index = this.departments.indexOf(departmentName);
        if (index !== -1) {
            this.departments.splice(index, 1);
        } else {
            console.log(`Факультет "${departmentName}" не найден.`);
        }
    }

    displayDepartments() {
        if (this.departments.length === 0) {
            console.log("Нет факультетов.");
        } else {
            console.log(`Факультеты университета ${this.name}:`);
            this.departments.forEach(department => console.log(department));
        }
    }
}

// use example
const uni = new University("норм универ");
uni.addDepartment("Факультет экономики");
uni.addDepartment("Факультет инженерии");
uni.addDepartment("Факультет медицины");

uni.displayDepartments();

uni.removeDepartment("Факультет инженерии");
uni.displayDepartments();
