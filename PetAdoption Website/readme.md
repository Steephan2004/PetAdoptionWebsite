# Project Title

## Pet Adoption Website

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

---

## About the Project
This is the pet adoption website,where people can adopt various types of pets through online.

---

## Features
-Login and SignUp Functionality.
-Form validation using JavaScript and Django.
-Easy-to-navigate structure.
-Responsive Website.
-Carousel feature allows user to navigate through a series of images
-Filtering the pets under pet-type,breed,gender,age.
-Dynamic Website where everthing is done dynamically using backend
-Email connectivity using Django(smtplib library) which helps to connect with us.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Steephan2004/Pet_Adoption_Website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Pet Adoption
   ```
3. Open `index.html` in your browser.

4.For Backend:
    ```bash
    cd Backend
    cd backend
    ```
5. install required packages using pip:
    ```bash
    pip install Django
    pip install djangorestframework
    pip install django-cors-headers
    ```
    Note:ensure first you installed Python in your laptop

6.Run the backend:
    ```bash
    py manage.py runserver
    ```

---
Note:Change the backend URL to integrate frontend and backend

## Technologies Used
- HTML
- CSS
- JavaScript
- Django
- DjangoRestFramework

---

## Folder Structure
Project directory structure:

Pet Adoption Website/
│
├── index.html        # Main login page
├── home.html        # Home page
├── css/
│   └── login.css     # Styling for the index.html page
│   └── home.css     # Styling for the home page
├── js/
│   └── login.js      # JavaScript for form validation
│   └── home.js      # JavaScript for home page
├── assets/
│   └── images/       # Images used in the project
├── README.md         # Project documentation


Backend/
│
├── manage.py
├── backend/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   ├── asgi.py
├── media/
│   ├── pets/
├── app/
│   ├── migrations/
│   │   └── __init__.py
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   ├── views.py
│   ├── urls.py
├── db.sqlite3



## Contact
- **Name**: Steephan Raj
- **Email**: steephan383@gmail.com
- **GitHub**: [\[SteephanRaj\](https://github.com/SteephanRaj)](https://github.com/Steephan2004)

---
