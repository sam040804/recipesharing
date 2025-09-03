

# 🍳 Recipe Sharing Platform

A **modern, text-based web application** that allows users to **share, view, search, and manage recipes**. Built with simplicity in mind, the platform provides an interactive interface for recipe enthusiasts to contribute and explore new dishes.



## **Features**

* **Add Recipes**: Users can add new recipes with title, ingredients, and cooking steps.
* **View Recipes**: Browse all recipes in a clean, card-style layout.
* **Delete Recipes**: Remove any recipe from the list easily.
* **Search Recipes**: Real-time search by **title or ingredients** using the top search bar.
* **Responsive Design**: Works seamlessly on desktop and mobile devices.
* **Pastel-themed Layout**: Visually appealing design with soft colors for a clean interface.

---

## **Tech Stack**

* **Frontend**: HTML, CSS, JavaScript
* **Backend (Optional)**: Python Flask 
* **Database (Optional)**: JSON (frontend)

---

## **Project Structure**


recipe-app/
 ├── backend/                  # Backend (optional)
 │   ├── app.py                # Flask app
 │   ├── models/               # Database models
 │   ├── routes/               # API routes
 │   └── config.py             # Config file
 ├── frontend/                 # Frontend
 │   ├── index.html            # Main page
 │   ├── style.css             # Styling
 │   ├── script.js             # JavaScript functionality
 │   └── recipes.json          # Sample recipe data


---

## **Getting Started**

### **1. Clone the repository**


git clone <git remote add origin https://github.com/sam040804/recipesharing.git>
cd recipe-app/frontend


### **2. Run a local server**

Since the app fetches JSON data, it needs a local server. You can use Python:

python3 -m http.server 8000


Open your browser at:


http://localhost:8000


## **Usage**

1. **Add Recipe**: Fill in the title, ingredients (comma-separated), and steps (comma-separated).
2. **View Recipes**: Browse all recipes in the “All Recipes” section.
3. **Delete Recipe**: Click the “Delete” button on any recipe card.
4. **Search Recipes**: Type in the top search bar to filter recipes by title or ingredients.




## **Sample Recipes (Text-Based)**

* **Pani Puri**: puri, boiled potatoes, boiled chickpeas, tamarind chutney, mint-coriander chutney, spices, salt, water
* **Ladoo**: gram flour (besan), ghee, sugar, cardamom powder, chopped nuts (optional)
* **Margherita Pizza**: pizza dough, tomato sauce, mozzarella cheese, basil, olive oil, salt, black pepper

*(and more – see `recipes.json` for full list)*

---

## **Future Enhancements**

* User authentication (Sign up / Login)
* Recipe ratings and comments
* Recipe categories and tags
* Like/favorite recipes
* Persistent backend database (PostgreSQL/MySQL)
* PDF export and social media sharing

##Screenshot: [[https://drive.google.com/drive/folders/1w0lvHI7GTiNx115jclzeDwGn3r5VzfLF?usp=drive_link]]

