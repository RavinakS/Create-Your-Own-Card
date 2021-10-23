# Infistack

# what is done
**1. sign Up**
 - (profilePic_url, userName, email, phoneNum, password, gender, Dob, qualification, T_and_C) all feilds are required.
  - schema validation (Joi)/(RegExp) for username, password, dob, phonenumber, email
  - password hashing (bcrypt-node module)
  - term and conditions

**2. login**
 - verifying password (bcryp.compare())
 - create token for authorization (JWT)

**3. Cards**
 - authentication (token verification)
 - creating card (post card information in the database)

## Project pattern
MVC - Model View Controller

## Packages I have used so far
 - Express (router, use, listen)
 - nodemon
 - knex
 - mysql2

## How to run
