function displayInfo() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Fetch the Excel file path
    var excelFilePath = "For Online Database.xlsx";

    // Fetch the student data from the Excel file
    fetch(excelFilePath)
        .then(response => response.arrayBuffer())
        .then(data => {
            var workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

            // Assuming the data is in the "Admissions 2024" sheet
            var worksheet = workbook.Sheets["Admissions 2024"];

            // Convert the worksheet to JSON
            var jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Find the student data based on the phone number
            var student = jsonData.find(function (student) {
                return student["Phone last 7 digits"] === phoneNumber;
            });

            var infoContainer = document.getElementById("infoContainer");
            if (student) {
                var applicantName = student["Applicant Name"];
                var section = student["Section"];
                var timings = student["Timings"];
                var murabbiName = student["Murabbi name"];
                infoContainer.innerHTML = "<p>Name: " + applicant


