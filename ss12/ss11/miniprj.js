let students = [];
while (true) {
    let choice = prompt(
        "===== STUDENT MANAGEMENT =====\n" +
        "1. Create Student\n" +
        "2. Read All Students\n" +
        "3. Filter Scholarship (GPA > 8)\n" +
        "4. Update Student\n" +
        "5. Delete Student\n" +
        "6. Compliance Check\n" +
        "7. Average GPA\n" +
        "8. Normalize Name\n" +
        "0. Exit\n" +
        "Choose:"
    );
    switch (choice) {
        case "1":
            let id = prompt("Enter ID:");
            let name = prompt("Enter name:");
            let age = parseInt(prompt("Enter age:"));
            let gpa = parseFloat(prompt("Enter GPA:"));
            let status = prompt("Enter status (active/inactive):");
            let student = {
                id: id,
                name: name,
                age: age,
                gpa: gpa,
                status: status
            };
            students.push(student);
            alert("Added successfully!");
            break;
        case "2":
            if (students.length === 0) {
                alert("No students.");
            } else {
                let text = "";
                for (let i = 0; i < students.length; i++) {
                    text += "ID: " + students[i].id +
                        " | Name: " + students[i].name +
                        " | Age: " + students[i].age +
                        " | GPA: " + students[i].gpa +
                        " | Status: " + students[i].status +
                        "\n";
                }
                alert(text);
                console.log(students);
            }
            break;
        case "3":
            let result = "";
            let found = false;
            for (let i = 0; i < students.length; i++) {
                if (students[i].gpa > 8) {
                    result += students[i].name + " - GPA: " + students[i].gpa + "\n";
                    found = true;
                }
            }
            if (found) {
                alert(result);
            } else {
                alert("No scholarship students.");
            }
            break;
        case "4":
            let updateId = prompt("Enter ID to update:");
            let isFound = false;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === updateId) {
                    students[i].name = prompt("New name:");
                    students[i].gpa = parseFloat(prompt("New GPA:"));
                    alert("Updated successfully!");
                    isFound = true;
                    break;
                }
            }
            if (!isFound) {
                alert("Student not found.");
            }
            break;
        case "5":
            let deleteId = prompt("Enter ID to delete:");
            let deleted = false;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === deleteId) {
                    students.splice(i, 1);
                    alert("Deleted successfully!");
                    deleted = true;
                    break;
                }
            }
            if (!deleted) {
                alert("Student not found.");
            }
            break;
        case "6":
            let under18 = false;
            let allActive = true;
            for (let i = 0; i < students.length; i++) {
                if (students[i].age < 18) {
                    under18 = true;
                }
                if (students[i].status !== "active") {
                    allActive = false;
                }
            }
            alert(
                "Has student under 18: " + under18 +
                "\nAll students active: " + allActive
            );
            break;
        case "7":
            if (students.length === 0) {
                alert("No data.");
            } else {
                let sum = 0;
                for (let i = 0; i < students.length; i++) {
                    sum += students[i].gpa;
                }
                let avg = sum / students.length;
                alert("Average GPA: " + avg.toFixed(2));
            }
            break;
        case "8":
            let newList = [];
            for (let i = 0; i < students.length; i++) {
                let newStudent = {
                    id: students[i].id,
                    name: students[i].name.toUpperCase(),
                    age: students[i].age,
                    gpa: students[i].gpa,
                    status: students[i].status
                };
                newList.push(newStudent);
            }
            console.log(newList);
            alert("Normalized list created. Check console.");
            break;
        case "0":
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }
    if (choice === "0") {
        break;
    }
}