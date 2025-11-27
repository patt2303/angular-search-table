Overview

This is a standalone Angular application that allows users to search for employees and view the results in a table. The application fetches employee data from a mock API powered by JSON Server.

Key features:

Search Panel: Reactive form to enter a search query.

Data Table: Displays employees with proper HTML structure (<thead>/<tbody>).

Standalone Components: No NgModule required.

SSR-ready HTTP Client: Configured to use fetch() for better performance.

Accessible forms: Inputs have id, name, and <label> for accessibility.

JSON Server backend: Mock API for easy testing.



Setup Instructions
1. Prerequisites

Make sure the following are installed:

Node.js (v18 or higher recommended)

npm (comes with Node.js)

Angular CLI (optional for global commands):

npm install -g @angular/cli


JSON Server:

npm install -g json-server



2. Install Angular dependencies
npm install

. Start the Angular application

By default, Angular serves on port 4200. If the port is busy, you can pick another port (e.g., 4300):

ng serve

3. Using the App

Enter a search query in the Search Employees input field.

Click Search.

Matching employees will appear in the table below.

Leave the input blank to display all employees.