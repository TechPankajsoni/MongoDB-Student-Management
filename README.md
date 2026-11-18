# Student Information Management System using MongoDB

## Project overview
A command-line database project demonstrating basic student-record management with MongoDB.

## Technology
- MongoDB Community Server 9.0.8
- MongoDB Shell (mongosh) 2.14.2
- MongoDB Compass
- Windows Command Prompt

## Database structure
- Database: `StudentsDB`
- Collection: `students`
- Fields: `roll_no`, `name`, `course`, `marks`
- Final records: 4

## CRUD operations demonstrated
- Create: insert student documents with `insertMany()`
- Read: retrieve records with `find()` and `findOne()`
- Update: set Rahul's marks (roll number 101) to 95
- Delete: remove Vikas's record (roll number 105)

## Run the project
1. Install MongoDB Community Server and MongoDB Shell.
2. Start the MongoDB Windows service from an elevated Command Prompt if it is not already running:
   `net start MongoDB`
3. Open the shell:
   `mongosh`
4. Select the database:
   `use StudentsDB`
5. Import the sample data from this folder in a Windows Command Prompt (not inside mongosh):
   `mongoimport --db StudentsDB --collection students --file students.json --jsonArray`
6. Verify in mongosh:
   `db.students.find().pretty()`
   `db.students.countDocuments()`

Note: Importing the sample JSON into a collection that already contains the same roll numbers can create duplicates. Use a fresh/empty `students` collection or clear it first if you intentionally want to reload the sample data.

## Screenshots
Add your own terminal/Compass screenshots to the `screenshots/` folder. Suggested screenshots:
1. MongoDB connection and database/collection.
2. Insert operation and inserted records.
3. Read/query output.
4. Update result showing Rahul's marks as 95.
5. Delete result and final count of 4.

## Repository contents
- `README.md`: project description and run instructions
- `students.json`: final sample data (four remaining records)
- `queries.js`: useful MongoDB shell commands
- `MongoDB_Student_Management_Final_Report.pdf`: project report
- `screenshots/`: add your execution screenshots here
