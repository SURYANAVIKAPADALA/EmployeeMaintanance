# EmployeeMaintanance using Angular&Json server
In this project we use angular and json server to maintain employee details using rest operators

Table of Contents
Prerequisites
Setup JSON Server
Setting Up the Angular Application
Creating the REST Service
Using RxJS with REST
Example Code
Conclusion
1. Prerequisites
Node.js installed. You can download it from here.
Angular CLI: You can install Angular CLI globally by running the following command:
bash
Copy
npm install -g @angular/cli
JSON Server: A simple tool to mock a REST API. Install it globally by running:
bash
Copy
npm install -g json-server
2. Setup JSON Server
Create a db.json file with mock data for employees:
{
  "employees": [
    { "id": 1, "name": "John Doe", "department": "IT", "designation": "Developer" },
    { "id": 2, "name": "Jane Smith", "department": "HR", "designation": "Manager" },
    { "id": 3, "name": "George Williams", "department": "Finance", "designation": "Accountant" }
  ]
}

}
Start the JSON Server:

bash
Copy
json-server --watch db.json --port 3000
Your REST API will be available at http://localhost:3000.

3. Setting Up the Angular Application
Create a new Angular application:

bash
Copy
ng new rxjs-rest-demo
Change to your project directory:

bash
Copy
cd rxjs-rest-demo
Install the HttpClientModule and RxJS (if not already installed) to make HTTP requests:

bash
Copy
npm install rxjs
Open app.module.ts and import the HttpClientModule:
after that u can observe my code and knows
That's it! You have a fully functional Angular app with REST API interaction using RxJS and JSON Server. Feel free to expand on this setup, add more features, and explore more RxJS operators for complex data transformations and error handling.
