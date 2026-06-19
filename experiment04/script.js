const students = [
    {
        name: "Rahul Sharma",
        course: "Computer Science",
        marks: 85
    },
    {
        name: "Anita Verma",
        course: "Information Technology",
        marks: 92
    },
    {
        name: "Rohan Gupta",
        course: "Electronics",
        marks: 78
    }
];

const container = document.getElementById("student-container");

students.forEach(student => {
    const card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
        <h2>${student.name}</h2>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Marks:</strong> ${student.marks}</p>
    `;

    container.appendChild(card);
});