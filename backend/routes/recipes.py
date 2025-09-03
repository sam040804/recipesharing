from flask import Blueprint, request, jsonify
from models.models import db, Recipe, Like

recipes_bp = Blueprint('recipes_bp', __name__)

# Add a recipe
@recipes_bp.route('/recipes', methods=['POST'])
def add_recipe():
    data = request.get_json()
    title = data.get('title')
    ingredients = data.get('ingredients')
    steps = data.get('steps')
    user_id = data.get('user_id', 1)  # default user id for testing

    if not all([title, ingredients, steps]):
        return jsonify({'error': 'Missing data'}), 400

    recipe = Recipe(title=title, ingredients=ingredients, steps=steps, user_id=user_id)
    db.session.add(recipe)
    db.session.commit()
    return jsonify({'message': 'Recipe added', 'recipe': {
        'id': recipe.id,
        'title': recipe.title,
        'ingredients': recipe.ingredients,
        'steps': recipe.steps
    }}), 201

# Get all recipes
@recipes_bp.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    result = []
    for r in recipes:
        result.append({
            'id': r.id,
            'title': r.title,
            'ingredients': r.ingredients,
            'steps': r.steps,
            'created_at': r.created_at
        })
    return jsonify(result), 200

# Get single recipe
@recipes_bp.route('/recipes/<int:id>', methods=['GET'])
def get_recipe(id):
    recipe = Recipe.query.get_or_404(id)
    return jsonify({
        'id': recipe.id,
        'title': recipe.title,
        'ingredients': recipe.ingredients,
        'steps': recipe.steps,
        'created_at': recipe.created_at
    }), 200

# Like a recipe
@recipes_bp.route('/recipes/<int:id>/like', methods=['POST'])
def like_recipe(id):
    user_id = request.json.get('user_id', 1)  # default user
    recipe = Recipe.query.get_or_404(id)
    like = Like(user_id=user_id, recipe_id=id)
    db.session.add(like)
    db.session.commit()
    return jsonify({'message': 'Recipe liked'}), 200
