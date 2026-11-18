// Student Information Management System
// Run these commands inside mongosh.

use("StudentsDB");

// READ: display all students
db.students.find().pretty();

// READ: find one student by roll number
db.students.findOne({ roll_no: 101 });

// READ: find students scoring above 80
db.students.find({ marks: { $gt: 80 } });

// COUNT: total student records
db.students.countDocuments();

// UPDATE example: set Rahul's marks to 95
// This command has already been performed in the demonstrated project.
db.students.updateOne(
  { roll_no: 101 },
  { $set: { marks: 95 } }
);

// DELETE example: remove Vikas (roll number 105)
// This command has already been performed in the demonstrated project.
// Uncomment and run only if you want to repeat the delete operation.
 // db.students.deleteOne({ roll_no: 105 });
