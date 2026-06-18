function calculateResult() {

    let subjects = parseInt(
        document.getElementById("subjects").value
    );

    if (isNaN(subjects) || subjects <= 0) {
        alert("Please enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= subjects; i++) {

        let marks = parseFloat(
            prompt(`Enter marks for Subject ${i}`)
        );

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Please enter valid marks between 0 and 100");
            return;
        }

        total += marks;
    }

    let percentage = total / subjects;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let resultStatus = percentage >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        Total Marks: ${total}<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}<br>
        Result: ${resultStatus}
    `;
}