document.getElementById('resumeForm').addEventListener('submit', function(e) {
e.preventDefault();

var name = document.getElementById('name').value;
var fatherName = document.getElementById('fatherName').value;
var cast = document.getElementById('cast').value;
var cnic = document.getElementById('cnic').value;
var dob = document.getElementById('dob').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var address = document.getElementById('address').value;
var matricDegree = document.getElementById('matricDegree').value;
var matricFromYear = document.getElementById('matricFromYear').value;
var matricToYear = document.getElementById('matricToYear').value;
var intermediateDegree = document.getElementById('intermediateDegree').value;
var intermediateFromYear = document.getElementById('intermediateFromYear').value;
var intermediateToYear = document.getElementById('intermediateToYear').value;
var bachelorDegree = document.getElementById('bachelorDegree').value;
var bachelorFromYear = document.getElementById('bachelorFromYear').value;
var bachelorToYear = document.getElementById('bachelorToYear').value;
var currentlyEnrolled = document.getElementById('currentlyEnrolled').value;
var skills = document.getElementById('skills').value;
var experience = document.getElementById('experience').value;
var profilePic = document.getElementById('profilePic').files[0];

// Set preview
document.getElementById('previewName').textContent = name;
document.getElementById('previewFatherName').textContent = fatherName;
document.getElementById('previewCast').textContent = cast;
document.getElementById('previewCnic').textContent = cnic;
document.getElementById('previewDob').textContent = dob;
document.getElementById('previewEmail').textContent = email;
document.getElementById('previewPhone').textContent = phone;
document.getElementById('previewAddress').textContent = address;
document.getElementById('previewMatricDegree').textContent = matricDegree;
document.getElementById('previewMatricFromYear').textContent = matricFromYear;
document.getElementById('previewMatricToYear').textContent = matricToYear;
document.getElementById('previewIntermediateDegree').textContent = intermediateDegree;
document.getElementById('previewIntermediateFromYear').textContent = intermediateFromYear;
document.getElementById('previewIntermediateToYear').textContent = intermediateToYear;
document.getElementById('previewBachelorDegree').textContent = bachelorDegree;
document.getElementById('previewBachelorFromYear').textContent = bachelorFromYear;
document.getElementById('previewBachelorToYear').textContent = bachelorToYear;
document.getElementById('previewCurrentlyEnrolled').textContent = currentlyEnrolled;
document.getElementById('previewSkills').textContent = skills;
document.getElementById('previewExperience').textContent = experience;

if (profilePic) {
const reader = new FileReader();
reader.onload = function() {
document.getElementById('previewProfilePic').src = reader.result;
};
reader.readAsDataURL(profilePic);
}

document.getElementById('resumePreview').style.display = 'block';
});

function downloadResume() {
const doc = new PDF();
doc.text("Resume", 20, 20);
doc.text("Name: " + document.getElementById('previewName').textContent, 20, 30);
doc.text("Father's Name: " + document.getElementById('previewFatherName').textContent, 20, 40);
doc.text("Cast: " + document.getElementById('previewCast').textContent, 20, 50);
doc.text("CNIC: " + document.getElementById('previewCnic').textContent, 20, 60);
doc.text("DOB: " + document.getElementById('previewDob').textContent, 20, 70);
doc.text("Email: " + document.getElementById('previewEmail').textContent, 20, 80);
doc.text("Phone: " + document.getElementById('previewPhone').textContent, 20, 90);
doc.text("Address: " + document.getElementById('previewAddress').textContent, 20, 100);
doc.text("Matriculation: " + document.getElementById('previewMatricDegree').textContent + " from " + document.getElementById('previewMatricFromYear').textContent + " to " + document.getElementById('previewMatricToYear').textContent, 20, 110);
doc.text("Intermediate: " + document.getElementById('previewIntermediateDegree').textContent + " from " + document.getElementById('previewIntermediateFromYear').textContent + " to " + document.getElementById('previewIntermediateToYear').textContent, 20, 120);
doc.text("Bachelor's Degree: " + document.getElementById('previewBachelorDegree').textContent + " from " + document.getElementById('previewBachelorFromYear').textContent + " to " + document.getElementById('previewBachelorToYear').textContent, 20, 130);
doc.text("Currently Enrolled: " + document.getElementById('previewCurrentlyEnrolled').textContent, 20, 140);
doc.text("Skills: " + document.getElementById('previewSkills').textContent, 20, 150);
doc.text("Work Experience: " + document.getElementById('previewExperience').textContent, 20, 160);
doc.save('resume.pdf');
}