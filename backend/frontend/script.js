const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');

// Array to hold recipes
let recipes = [];

// Fetch recipes from JSON
fetch('recipes.json')
  .then(response => response.json())
  .then(data => {
    recipes = data;
    displayRecipes();
  })
  .catch(err => console.warn("No recipes.json found, starting empty"));

// Display all recipes
function displayRecipes() {
  recipesContainer.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Steps:</strong> ${recipe.steps.join(', ')}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    recipesContainer.appendChild(card);
  });
  addDeleteFunctionality();
}

// Search functionality
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
      const titleMatch = recipe.title.toLowerCase().includes(query);
      const ingredientsMatch = recipe.ingredients.join(' ').toLowerCase().includes(query);
      return titleMatch || ingredientsMatch;
    });
    displayFilteredRecipes(filteredRecipes);
  });
}

function displayFilteredRecipes(filteredRecipes) {
  recipesContainer.innerHTML = '';
  filteredRecipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Steps:</strong> ${recipe.steps.join(', ')}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
      
    `;
    recipesContainer.appendChild(card);
  });
  addDeleteFunctionality();
}

// Delete recipe
function addDeleteFunctionality() {
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = e.target.getAttribute('data-index');
      recipes.splice(index, 1);
      displayRecipes();
    });
  });
}

// Add new recipe via form
const recipeForm = document.getElementById('recipeForm');
if (recipeForm) {
  recipeForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value.split(',');
    const steps = document.getElementById('steps').value.split(',');

    const newRecipe = { title, ingredients, steps };
    recipes.push(newRecipe);
    displayRecipes();
    recipeForm.reset();
  });
}
