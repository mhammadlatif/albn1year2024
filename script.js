// Assuming you're using Papa Parse library for CSV parsing
function displayInfo() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Fetch the CSV file path
    var csvFilePath = "student_data.csv";

    // Fetch the student data from the CSV file
    Papa.parse(csvFilePath, {
        download: true,
        header: true,
        complete: function(results) {
            var studentData = results.data;

            // Find the student data based on the phone number
            var student = studentData.find(function(student) {
                return student["Phone last 7 digits"] === phoneNumber;
            });

            var infoContainer = document.getElementById("infoContainer");
            if (student) {
                var applicantName = student["Applicant Name"];
                var section = student["Section"];
                var timings = student["Timings"];
                var murabbiName = student["Murabbi name"];
                infoContainer.innerHTML = "<p>Name: " + applicantName + "</p>" +
                                          "<p>Section: " + section + "</p>" +
                                          "<p>Timings: " + timings + "</p>" +
                                          "<p>Murabbi Name: " + murabbiName + "</p>";
            } else {
                infoContainer.innerHTML = "Student with provided phone number not found.";
            }
        }
    });
}
