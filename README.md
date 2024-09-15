# Fruit.ai


**Objective**

Design and build a health manager product called Fruit.ai, which includes various services such as a chatbot, translator, FAQ, and about page. The product is designed to assist users with fruit-related information, translate texts, manage FAQs, and provide general product information.

**Features**

Login Page: Simple login with dummy User ID and Password, redirects to the homepage.
Home Page: Contains navigational links to four main services.
Chatbot Page: Displays a list of fruits as cards and shows detailed fruit information on click.
Translator Page: Allows users to input text and translate it into a regional language.
FAQ Page: Allows users to create, read, update, and delete FAQs related to fruits.
About Page: Information about the Fruit.ai product.
Requirements

## Frontend
• Framework: React (preferred) , CSS.
• API Interaction:
    • Handle API requests using async/await.
    • Properly handle timeouts and errors.
• Styling: Use standard CSS or CSS-in-JS libraries.
• Form Handling: Proper validation for forms, especially on the FAQ page.
• UX: Good user experience with loading indicators and error messages.


## Backend

Framework: Flask (preferred), FastAPI with Python
• API Endpoints:
    • GET /faqs: Fetch all FAQs.
    • GET /faqs/:id: Fetch a single FAQ by ID.
    • POST /faqs: Create a new FAQ.
    • PUT /faqs/:id: Update an FAQ by ID.
    • DELETE /faqs/:id: Delete an FAQ by ID.
• Error Handling: Implement proper validation and error responses for all endpoints.


#Pages and Functionality

1. Login Page
Description: Dummy login interface for User ID and Password. Redirects to the homepage on successful login.
2. Home Page
Description: Home page with links to the following services:
Chatbot: Displays fruit information.
Translator: Text translation into a regional language.
FAQ Page: View and manage FAQs related to fruits.
About Page: Information about the Fruit.ai product.
3. Chatbot Page
Description:
Display fruits in card format.
Click on a card to view the detailed information of the fruit.
4. Translator Page
Description:
Input box where users can enter text.
Translate text into the selected regional language using an API.
5. FAQ Page
Description:
Basic CRUD functionality to manage FAQs.
Users can create, update, delete, and view FAQs related to fruits.
6. About Page
Description:
Information about the Fruit.ai project.
Deployment

Frontend Deployment
Platform: Vercel/Netlify (publicly accessible).
Backend Deployment
Platform: AWS, Heroku, or Render (publicly accessible).
Environment Variables
Ensure the frontend uses environment variables to communicate with the backend API URLs.
Project Setup and Running Instructions

Prerequisites
Node.js
Python (Flask or Django)
Git
Frontend Setup
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/fruit-ai.git
cd fruit-ai/frontend
Install dependencies:
bash
Copy code
npm install
Run the frontend:
bash
Copy code
npm start
The application will run on http://localhost:3000.
Backend Setup
Navigate to the backend folder:
bash
Copy code
cd fruit-ai/backend
Create a virtual environment and install dependencies:
bash
Copy code
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
Run the backend server:
bash
Copy code
python app.py
The backend will run on http://127.0.0.1:5000.

