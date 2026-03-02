let students = [];

function getTime() {
    return new Date().getTime();
}

function findStudentById(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }
    return null;
}

function createStudent() {
    let id = prompt("Enter ID:");
    if (findStudentById(id)) {
        alert("ID already exists!");
        return;
    }

    let name = prompt("Enter name:");
    let age = parseInt(prompt("Enter age (16-60):"));
    let gpa = parseFloat(prompt("Enter GPA (0-10):"));
    let status = prompt("Enter status (active/inactive):");

    if (age < 16 || age > 60 || isNaN(age)) {
        alert("Invalid age!");
        return;
    }

    if (gpa < 0 || gpa > 10 || isNaN(gpa)) {
        alert("Invalid GPA!");
        return;
    }

    if (status !== "active" && status !== "inactive") {
        alert("Invalid status!");
        return;
    }

    let student = {
        id: id,
        name: name,
        age: age,
        gpa: gpa,
        status: status,
        createdAt: getTime(),
        updatedAt: null,
        deletedAt: null
    };

    students.push(student);
    alert("Student created successfully!");
}

function updateStudent() {
    let id = prompt("Enter ID to update:");
    let student = findStudentById(id);

    if (!student) {
        alert("Student not found!");
        return;
    }

    let newName = prompt("New name (leave blank to skip):");
    let newAge = prompt("New age (leave blank to skip):");
    let newGpa = prompt("New GPA (leave blank to skip):");

    if (newName !== "") {
        student.name = newName;
    }

    if (newAge !== "") {
        let age = parseInt(newAge);
        if (age < 16 || age > 60 || isNaN(age)) {
            alert("Invalid age!");
            return;
        }
        student.age = age;
    }

    if (newGpa !== "") {
        let gpa = parseFloat(newGpa);
        if (gpa < 0 || gpa > 10 || isNaN(gpa)) {
            alert("Invalid GPA!");
            return;
        }
        student.gpa = gpa;
    }

    student.updatedAt = getTime();
    alert("Updated successfully!");
}

function softDeleteStudent() {
    let id = prompt("Enter ID to delete:");
    let student = findStudentById(id);

    if (!student) {
        alert("Student not found!");
        return;
    }

    let confirmDelete = prompt("Type YES to confirm:");
    if (confirmDelete !== "YES") {
        alert("Cancelled.");
        return;
    }

    student.status = "inactive";
    student.deletedAt = getTime();
    alert("Soft deleted!");
}

function restoreStudent() {
    let id = prompt("Enter ID to restore:");
    let student = findStudentById(id);

    if (!student) {
        alert("Student not found!");
        return;
    }

    student.status = "active";
    student.deletedAt = null;
    student.updatedAt = getTime();
    alert("Restored successfully!");
}

function viewStudents() {
    let data = students.slice();

    let search = prompt("Search by name (blank to skip):");
    if (search !== "") {
        let temp = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                temp.push(data[i]);
            }
        }
        data = temp;
    }

    let filterStatus = prompt("Filter by status (active/inactive/all):");
    if (filterStatus === "active" || filterStatus === "inactive") {
        let temp = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === filterStatus) {
                temp.push(data[i]);
            }
        }
        data = temp;
    }

    let sortOrder = prompt("Sort GPA (asc/desc):");
    if (sortOrder === "asc") {
        data.sort(function(a, b) {
            return a.gpa - b.gpa;
        });
    } else if (sortOrder === "desc") {
        data.sort(function(a, b) {
            return b.gpa - a.gpa;
        });
    }

    let pageSize = 5;
    let totalPages = Math.ceil(data.length / pageSize);
    let currentPage = 1;

    do {
        let start = (currentPage - 1) * pageSize;
        let end = start + pageSize;
        let pageData = data.slice(start, end);

        console.clear();
        console.log("Page " + currentPage + " / " + totalPages);
        console.table(pageData);

        let nav = prompt("First | Last | Next | Prev | Exit");

        if (nav === "Next" && currentPage < totalPages) currentPage++;
        if (nav === "Prev" && currentPage > 1) currentPage--;
        if (nav === "First") currentPage = 1;
        if (nav === "Last") currentPage = totalPages;
        if (nav === "Exit") break;

    } while (true);
}

function analyticsDashboard() {
    if (students.length === 0) {
        alert("No data!");
        return;
    }

    let total = 0;
    let active = 0;
    let inactive = 0;
    let sumGpa = 0;

    for (let i = 0; i < students.length; i++) {
        total++;
        sumGpa += students[i].gpa;

        if (students[i].status === "active") active++;
        else inactive++;
    }

    let avgGpa = sumGpa / total;

    console.log("===== DASHBOARD =====");
    console.log("Total:", total);
    console.log("Active:", active);
    console.log("Inactive:", inactive);
    console.log("Average GPA:", avgGpa.toFixed(2));

    alert("Analytics displayed in console.");
}

let choice;

do {
    choice = prompt(
        "==== STUDENT MANAGER ADVANCED ====\n" +
        "1. Create Student\n" +
        "2. Update Student\n" +
        "3. Soft Delete Student\n" +
        "4. Restore Student\n" +
        "5. View Students\n" +
        "6. Analytics Dashboard\n" +
        "0. Exit"
    );

    switch (choice) {
        case "1": createStudent(); break;
        case "2": updateStudent(); break;
        case "3": softDeleteStudent(); break;
        case "4": restoreStudent(); break;
        case "5": viewStudents(); break;
        case "6": analyticsDashboard(); break;
        case "0": alert("Goodbye!"); break;
        default: alert("Invalid choice!");
    }

} while (choice !== "0");