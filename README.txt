VYSHNAVI'S LABTRACK — COLLEGE LAB EQUIPMENT MANAGEMENT SYSTEM

PROJECT STRUCTURE
- app.js: Main Express application and server entry point.
- db.js: MySQL database connection (kept directly in the project root).
- routes/: API route files for equipment, users and issue records.
- public/: HTML pages, CSS, JavaScript and images.
- .env.example: Example database configuration.

DATABASE SETUP (MANUAL — MYSQL WORKBENCH)
Create a database named lab_equipment_db in MySQL Workbench, then create these three tables.

1) equipment
   equipment_id INT PRIMARY KEY
   name VARCHAR(100)
   category VARCHAR(50)
   quantity INT
   available_quantity INT
   status VARCHAR(20)

2) users
   user_id INT PRIMARY KEY
   name VARCHAR(100)
   email VARCHAR(100)
   password VARCHAR(255)
   role VARCHAR(30)

3) issue_records
   issue_id INT PRIMARY KEY
   equipment_id INT (FOREIGN KEY references equipment.equipment_id)
   user_id INT (FOREIGN KEY references users.user_id)
   issue_date DATE
   return_date DATE (allow NULL)
   quantity INT
   status VARCHAR(20)

SETUP
1. Extract this ZIP to your preferred project folder, for example D:\Lab_equip.
2. Open the project folder in VS Code.
3. Copy .env.example and rename the copy to .env.
4. In .env, set DB_HOST, DB_USER, DB_PASSWORD and DB_NAME=lab_equipment_db.
5. Open a terminal in the project folder and run: npm install
6. Run: npm start
7. Visit http://localhost:3000

PAGES
index.html, equipment.html, add-equipment.html, update-equipment.html,
delete-equipment.html, users.html, add-user.html, update-user.html,
issue-equipment.html, return-equipment.html, issue-records.html,
damaged-equipment.html, about.html, contact.html.

FUNCTIONALITY
- Equipment create, read, update and delete; search and status filtering.
- User create, read, update and delete; passwords stored as salted scrypt hashes.
- Issue records connect equipment and users using foreign keys.
- Issuing decreases available_quantity; returning increases it.
- Only available equipment with sufficient stock can be issued.
- Damaged/unavailable equipment has a separate page.
- Foreign keys prevent deleting records referenced by issue history.
- Contact form is a front-end demonstration and does not send email.
- Remote Unsplash images require an internet connection.
- No login/authentication or role-based access control is included.

The project uses mysql8 callback-style database access. Both app.js and db.js are in the main project folder.
