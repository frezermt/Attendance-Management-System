// Simple login simulation
function loginUser() {
    alert("Login successful");
    window.location.href = "index.html";
}

// Attendance marking logic
function markAttendance() {
    var name = document.getElementById("studentName").value;

    if (name === "") {
        document.getElementById("message").innerText = "Please enter a name.";
        return;
    }

    document.getElementById("message").innerText =
        "Attendance marked for " + name;
}
