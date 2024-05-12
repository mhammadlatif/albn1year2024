function displayInfo() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Get the uploaded file
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        // Assuming the data is in the first sheet
        var sheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];

        // Convert the worksheet to JSON
        var jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Find the student data based on the phone number
        var student = jsonData.find(function (student) {
            return student["Applicant Phone Number"] === phoneNumber;
        });

        var infoContainer = document.getElementById("infoContainer");
        if (student) {
            var section = student["Section"];
            var teacherName = student["Murabbi name"];
            infoContainer.innerHTML = "<p>Section: " + section + "</p><p>Teacher: " + teacherName + "</p>";
        } else {
            infoContainer.innerHTML = "<p>Student not found</p>";
        }
    };

    reader.readAsArrayBuffer(file);
}
