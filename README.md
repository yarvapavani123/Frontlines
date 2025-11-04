# 🏢 Companies Directory – Frontend Development 

https://darling-babka-e09dd8.netlify.app/

## 📌 Overview
This project is a **React + TypeScript** based frontend application designed to display a directory of companies with filtering, sorting, and pagination features.  
The main goal of this assignment is to demonstrate frontend development skills, including **API integration**, **state management**, and **UI design**.

---

## 🚀 Features
- Display company data in **card** and **table** views  
- **Filter** companies by name, industry, or location  
- **Search** functionality for quick lookups  
- **Pagination** for better navigation  
- **Responsive design** (mobile and desktop)  
- **Loading and error states**  
- Built with **React Hooks** and **Context API** for state management  
- Styled using **Tailwind CSS / Custom CSS** 

## 🧩 Folder Structure
Frontlines/
├── frontend/ # React + TypeScript (Vite) frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
│
├── backend/ # Node.js + Express backend
│ ├── Models/
│ ├── Routes/
│ ├── Controllers/
│ ├── middleware/
├ ── .env
│ ├── index.js
│ └── package.json

---
**Backend -Node.js**


**How to Clone and run the code**

**Step 1️⃣: Clone the Repository**
```bash
git clone https://github.com/yarvapavani123/Frontlines.git
cd Frontlines

**Step 2️⃣: Setup Backend (Node.js + MongoDB)**
Navigate to the backend folder:
-cd Backend

Install dependencies:
-npm install

Create a .env file inside the backend folder and add:
-MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/companies
PORT=5000

Start the backend server:
npm run dev

**The backend will run on http://localhost:5000**

**Step 3️⃣: Setup Frontend (React + TypeScript)**

Open a new terminal and go to the frontend folder:
-cd ../Frontend

Install dependencies:
npm install

Start the frontend application:
npm run dev

**The frontend will run on http://localhost:5173**

**Step 4️⃣: Connect Frontend and Backend**

const API_URL = "http://localhost:5000/api/companies";




