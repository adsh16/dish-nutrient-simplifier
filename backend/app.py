from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)


try:
    current_dir = os.path.dirname(os.path.abspath(__file__))
    csv_path = os.path.join(current_dir, 'data', 'nutrient_per_100g.csv')
    nutrient_data = pd.read_csv(csv_path)
    nutrient_data.fillna(0, inplace=True)
except Exception as e:
    print(f"Error loading CSV file: {e}")
    nutrient_data = None


from alternateIngredients import find_alternate_ingredients

# Add this new endpoint
@app.route('/api/alternatives/<ingredient_name>', methods=['GET'])
def get_alternatives(ingredient_name):
    if nutrient_data is None:
        return jsonify({'error': 'Nutrient database not loaded'}), 500
    
    alternatives = find_alternate_ingredients(ingredient_name, nutrient_data)
    return jsonify({'alternatives': alternatives})

def analyze_nutrients(ingredients, nutrient_data):
    total_nutrients = {
        'calories': 0,
        'protein': 0,
        'carbohydrates': 0,
        'fat': 0,
        'fiber': 0
    }
    
    analysis_text = []
    valid_ingredient_found = False  
    for ingredient in ingredients:
        name = ingredient.get('name', '').strip().lower()
        quantity = ingredient.get('quantity', 0)

        if not name:
            analysis_text.append(f"Invalid ingredient: Missing name")
            continue

        try:
            quantity = float(quantity)  
        except ValueError:
            analysis_text.append(f"Invalid quantity for ingredient '{name}': {quantity}")
            continue

        if quantity <= 0:
            analysis_text.append(f"Invalid quantity for ingredient '{name}': Must be greater than 0")
            continue

        matching_ingredients = nutrient_data[
            nutrient_data['Food Description'].str.lower() == name
        ]

        if not matching_ingredients.empty:
            valid_ingredient_found = True  
            ingredient_data = matching_ingredients.iloc[0] 

            scale_factor = quantity / 100.0
            total_nutrients['calories'] += ingredient_data['Energy'] * scale_factor
            total_nutrients['protein'] += ingredient_data['Protein'] * scale_factor
            total_nutrients['carbohydrates'] += ingredient_data['Carbohydrate'] * scale_factor
            total_nutrients['fat'] += ingredient_data['Total Fat'] * scale_factor
            total_nutrients['fiber'] += ingredient_data.get('Dietary Fiber', 0) * scale_factor
        else:
            analysis_text.append(f"Ingredient '{name}' not found in the database")
        

    if valid_ingredient_found:
        if total_nutrients['protein'] > 20:
            analysis_text.append("This dish is high in protein.")
        if total_nutrients['fiber'] < 5:
            analysis_text.append("This dish is low in fiber.")
        if total_nutrients['calories'] < 100:
            analysis_text.append("This dish is low in calories.")
        if total_nutrients['fat'] > 15:
            analysis_text.append("This dish is high in fat.")
        if total_nutrients['carbohydrates'] > 30:
            analysis_text.append("This dish is high in carbohydrates.")
        if total_nutrients['calories'] > 500:
            analysis_text.append("This dish is high in calories.")
        if total_nutrients['fiber'] > 10:
            analysis_text.append("This dish is high in fiber.")
        if total_nutrients['fat'] < 5:
            analysis_text.append("This dish is low in fat.")
        if total_nutrients['carbohydrates'] < 15:
            analysis_text.append("This dish is low in carbohydrates.")
    else:
        analysis_text.append("No valid ingredients found in the database.")

    total_nutrients['analysis'] = analysis_text
    
    return total_nutrients



@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to Dish Nutrient Simplifier API",
        "status": "active"
    })


@app.route('/api/analyze', methods=['POST'])
def analyze_dish():

    if nutrient_data is None:
        return jsonify({'error': 'Nutrient database not loaded'}), 500

    if not request.is_json:
        return jsonify({'error': 'Content-Type must be application/json'}), 400

    try:

        data = request.get_json()
        if not data or 'ingredients' not in data:
            return jsonify({'error': 'Missing ingredients data'}), 400

        ingredients = data['ingredients']
        if not ingredients or not isinstance(ingredients, list):
            return jsonify({'error': 'Ingredients must be a non-empty list'}), 400

        result = analyze_nutrients(ingredients, nutrient_data)
        return jsonify(result)

    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({'error': str(e)}), 400


@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not found'}), 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
