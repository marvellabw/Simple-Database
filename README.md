# Simple Database
> Created a simple database using Express and PostgreSQL. Utilized HTTP methods (Create, Read, Update, and Delete) and created routing for an admin dashboard.

## How to use this project?
First, clone this repository and open the folder in your Visual Studio Code.

### 1. Prepare the database:
1. Open config.json that is located in the config folder.
2. Change the username and password to your PostgreSQL username and password.
3. Open pgAdmin.
4. Create a new database by inputting "npm run db:create" into the terminal in Visual Studio Code.
5. Input "npm run migrate" in the terminal.
6. Input "npm run seed-gen:user" in the terminal.
7. Input "npm run seed-gen:biodata" in the terminal.
8. Input "npm run seed-gen:history" in the terminal.
9. Input "npm run seed" in the terminal.

### 2. Open the dashboard:
1. In the terminal, input "npm run dev". The website should be live on localhost:3000. You will immediately see the Login page.
2. Enter any username and password.

![Login page](https://user-images.githubusercontent.com/81511322/154925285-77455d39-319e-4460-8c4e-c4c3219db93e.png)

3. After pressing LOGIN, you will be redirected to the Dashboard page.

![Dashboard page](https://user-images.githubusercontent.com/81511322/154925560-d780fbbf-8833-465c-acbf-247d57eabacb.png)

### 3. Create new data:
1. Press the Create button on the top left of the page.
2. You will be redirected to the Create page. Enter the new data and press Create.

![Create new user page](https://user-images.githubusercontent.com/81511322/154925627-60a623f4-cc05-4563-9a98-3d75ad3f3d76.png)

3. You will be redirected back to the dashboard, and the new data will show on the page.

![User page with a new user](https://user-images.githubusercontent.com/81511322/154925699-cddfeef4-cd59-4c90-ba84-a254b3409939.png)

### 4. Update existing data:
1. Press the Update button on the data you want to edit.
2. You will be redirected to the Update page. Enter the new data values and press Edit.

![Update user page](https://user-images.githubusercontent.com/81511322/154925827-38359aa7-0170-4e47-9d60-47ada90283df.png)

3. You will be redirected back to the dashboard, and the updated data will show on the page.

![User page with updated user](https://user-images.githubusercontent.com/81511322/154925871-e4d383e4-195d-4cc7-b8f8-430369344f4a.png)

### 5. Delete existing data:
1. Press the Delete button on the data you want to delete.
2. The data will be deleted from the database, and it will no longer show on the page.

### You can read, create, update and delete in any section (Users, Biodata, or Game History).
![Biodata section](https://user-images.githubusercontent.com/81511322/154925935-4e34cb9e-b889-42ee-839d-fa46c7334920.png)
*Biodata section in the dashboard*

![Game History section](https://user-images.githubusercontent.com/81511322/154925959-dac1481a-b539-4a2f-b634-7706ed2aab92.png)
*Game History section in the dashboard*
