# Fruit.ai


**Objective**

Design and build a health manager product called Fruit.ai, which includes various services such as a chatbot, translator, FAQ, and about page. The product is designed to assist users with fruit-related information, translate texts, manage FAQs, and provide general product information.

**Features**

* Login Page: Simple login with dummy User ID and Password, redirects to the homepage.
* Home Page: Contains navigational links to four main services.
* Chatbot Page: Displays a list of fruits as cards and shows detailed fruit information on click.
* Translator Page: Allows users to input text and translate it into a regional language.
* FAQ Page: Allows users to create, read, update, and delete FAQs related to fruits.
* About Page: Information about the Fruit.ai product.

# Requirements

## Frontend
* Framework: React (preferred) , CSS.
* API Interaction:
    * Handle API requests using async/await.
    * Properly handle timeouts and errors.
* Styling: Use standard CSS or CSS-in-JS libraries.
* Form Handling: Proper validation for forms, especially on the FAQ page.
* UX: Good user experience with loading indicators and error messages.


## Backend

Framework: Flask (preferred), FastAPI with Python
* API Endpoints:
    * GET /faqs: Fetch all FAQs.
    * GET /faqs/:id: Fetch a single FAQ by ID.
    * POST /faqs: Create a new FAQ.
    * PUT /faqs/:id: Update an FAQ by ID.
    * DELETE /faqs/:id: Delete an FAQ by ID.
* Error Handling: Implement proper validation and error responses for all endpoints.


# Pages and Functionality

* Login Page
   * Description: Dummy login interface for User ID and Password. Redirects to the homepage on successful login.
   * login page
     ```bash
     userID : abc
     password : 123
     ```
* Home Page
   * Chatbot: Displays fruit information.
   * Translator: Text translation into a regional language.
   * FAQ Page: View and manage FAQs related to fruits.
   * About Page: Information about the Fruit.ai product.
* Chatbot Page
   * Click on a card to view the detailed information of the fruit.
* Translator Page
   * Translate text into the selected regional language using an API.
* FAQ Page
   * Users can create, update, delete, and view FAQs related to fruits.
* About Page
   * Information about the Fruit.ai project.


## Deployment

* Frontend Deployment
   *Platform: Vercel.
* Backend Deployment
   * Platform: Vercel.

* Environment Variables
   * Ensure the frontend uses environment variables to communicate with the backend API URLs.
 
## Project Setup and Running Instructions

## Frontend Setup
Clone the repository:
```bash
git clone https://github.com/your-username/fruit-ai.git
cd fruit-ai/myapp
```

* Install dependencies:
```bash
npm install
```

* Run the frontend:
```bash
npm start
```

* The application will run on http://localhost:3000.

## Backend Setup

* Navigate to the backend folder:
```bash
cd fruit-ai/backend
```

* Create a virtual environment and install dependencies:
Create a requirements.txt file for easy installation:
```bash
Flask
Flask-CORS
googletrans==4.0.0-rc1
Werkzeug
```
Run the following command to install all the dependencies:
```bash
pip install -r requirements.txt
```

* Run the backend server:
```bash
python app.py
```

* The backend will run on http://127.0.0.1:5000.

# Deploying Frontend
* Push your frontend code to GitHub.
* Deploy the frontend on Vercel.
  
# Deploying Backend
* Push your backend code to GitHub.
* Deploy the backend on Vercel.

  
## Deliverables

* Source Code: 
```bash
https://github.com/tusharsingla123/Fruit/tree/main
```


Live Demo: 
```bash
https://fruit-cyan.vercel.app/
```

