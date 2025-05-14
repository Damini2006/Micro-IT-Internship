function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Add Student Function
function addStudent() {
  const name = document.getElementById('studentName').value;
  const age = document.getElementById('studentAge').value;
  const grade = document.getElementById('studentGrade').value;

  const list = document.getElementById('studentList');
  const entry = document.createElement('li');
  entry.textContent = `👤 ${name} | Age: ${age} | Grade: ${grade}`;
  list.appendChild(entry);

  // Clear fields
  document.getElementById('studentName').value = '';
  document.getElementById('studentAge').value = '';
  document.getElementById('studentGrade').value = '';
}
