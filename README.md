# Infistack

# what is done
**1. sign Up**
 - (profilePic_url, userName, email, phoneNum, password, gender, Dob, qualification, T_and_C) all feilds are required.
  - schema validation (Joi)/(RegExp) mainly for username, password, dob, phonenumber, email
  - password hashing (bcrypt-node module)
  - email and phone number should be unique

**2. login**
 - verifying password (bcryp.compare())
 - create token for authorization (JWT)
 - login options (email, phone number)

**3. Cards**
 - authentication/authenticate the user (token verification)
 - create card (only logged in user can create card)
 - edit card (user can only edit their own cards if they have)
 - view card (view cards which are created by the user, can't see others cards)
 - delete card (user can also delete their cards but can't delete other's cards)  
  
<br />

# Project pattern (MVC - Model View Controller)
## Model (Queries, Model is known as interface of db)  
<br />

- **Connection (db connection using knex and creating tables)**  
This folder is not inside **model** folder but as I said model is a **interface** of db so all the queries related file and folders comes under model section only.
  - dbConnection.js - connecting with "infistack" database
  - users_detail_tbl.js - creating table for users information in the "infistack" database
  - cards_tbl.js - creating table for cards created by users (this table is a **child-table** of **users_detail** table, have used foriegn key format)
- **queries(all about query)**
  - signUp.js - query to insert the user information while signup (insert)
  - login.js - queries to get user's information (select)  
  - cards.js - queries for **users_cards** table (select, update, insert and del)

---
## V(View)
- nothing---

---
<br />

## Controller (This is where the main logical part comes, callback functions of routes)
<br />

In this section I have separated the callback functions from their routes, to look clean and clear and also it is helpfull in error solving.
- **routes folder**  
this folder will have routes but as I said, have separated the callback function which are in the controller folder, so from controller I have required the callback functions and used accordingly. I have used Router() function to create router object.
  - signUp.js - a route for sign up (**create-account**) *will add few more routes in future
  - login.js - a route for sign in (**login**) *will add few more routes in future
  - cards.js - routes for cards (**post-card**, **view-cards**, **edit-card**, and **delete-card**)  

- **controller folder**  
In this folder I have created a folder called **"middlewares"** for all the middlewares, did this to not repeat the same codes again and again.
  - **middlewares** (I have basically done the error handling part here)
    - isUserExist.js - if the user is already exist what say while signUp? and if not exist what to say when iser is trying to login?
    - password.js - here I have done password hashing and decoding with the help of **bcrypt**(a node module).
    - schema_validation.js - file naming convention is bit messy|) have made schema for all the validations for(email, phone number, user name
    password, date of birth etc.) using **Joi**(again one of the node modules)
    - token.js - creating token and varifying token for user authentication and authorization using **JWT(json-web-token)**  
<br />

  - bellow files are containing the callback functions where I have applied middleware functions. these callback functions and middleware functions have access of API requests and and sending responces.  
    - login.js - a callback function for login route
    - signUp.js - a callback function for signUp route
    - cards.js - callaback functions for cards(view, create, update, delete)

<br />

---
## Other files-

<br />

---
# How to run

