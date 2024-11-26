const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const fields = {};
    const header = lines.shift();

    for (const line of lines) {
      const student = line.split(',');
      if (student.length < 4) continue;

      const field = student[3];
      const firstName = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }
    const totalStudents = Object.values(fields).reduce((sum, names) => sum + names.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(' ')}`);
    }
  }
  catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;