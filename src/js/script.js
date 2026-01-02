// ---------------- LOGIN ----------------
function loginUser() {
    alert("Login successful");
    window.location.href = "index.html";
}

// ---------------- SIMULATED JSON DATABASE ----------------
let students = [
    { id: 1, name: "Ali", status: "Absent" },
    { id: 2, name: "Sara", status: "Absent" }
];

let nextId = 3;

// ---------------- ATTENDANCE FUNCTIONS ----------------
function markPresent() {
    updateAttendance("Present");
}

function markAbsent() {
    updateAttendance("Absent");
}

function updateAttendance(status) {
    const input = document.getElementById("studentName");
    const name = input.value.trim();

    if (name === "") {
        showMessage("Please enter a student name");
        return;
    }

    let student = students.find(
        s => s.name.toLowerCase() === name.toLowerCase()
    );

    if (student) {
        student.status = status;
    } else {
        students.push({
            id: nextId++,
            name: name,
            status: status
        });
    }

    renderTable();
    console.log("Simulated save to attendance.json:", students);
    input.value = "";
}

function renderTable() {
    const table = document.getElementById("attendanceTable");
    table.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td class="${student.status.toLowerCase()}">
                ${student.status}
            </td>
        `;
        table.appendChild(row);
    });

    showMessage("Attendance updated");
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}
