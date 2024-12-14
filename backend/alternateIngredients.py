import pandas as pd
import numpy as np

def find_alternate_ingredients(ingredient_name, nutrient_data):
    """Find healthier alternatives for a given ingredient."""
    try:
        # Get the original ingredient's nutritional data
        original = nutrient_data[
            nutrient_data['Food Description'].str.lower() == ingredient_name.lower()
        ].iloc[0]

        # Create a scoring system for alternatives
        def calculate_health_score(row):
            score = 0
            # Higher protein is better
            score += (row['Protein'] / original['Protein'] if original['Protein'] != 0 else 0) * 2
            # Higher fiber is better
            score += (row['Dietary Fiber'] / original['Dietary Fiber'] if original['Dietary Fiber'] != 0 else 0) * 2
            # Lower calories is better
            score += (original['Energy'] / row['Energy'] if row['Energy'] != 0 else 0)
            # Higher vitamins and minerals are better
            score += (row['Vit C'] / original['Vit C'] if original['Vit C'] != 0 else 0)
            score += (row['Iron'] / original['Iron'] if original['Iron'] != 0 else 0)
            return score

        nutrient_data['health_score'] = nutrient_data.apply(calculate_health_score, axis=1)

        alternatives = nutrient_data[
            nutrient_data['Food Description'].str.lower() != ingredient_name.lower()
        ].nlargest(3, 'health_score')

        comparisons = []
        for _, alt in alternatives.iterrows():
            comparison = {
                'name': alt['Food Description'],
                'reason': [],
                'nutrition_comparison': {
                    'calories': f"{alt['Energy']:.1f} vs {original['Energy']:.1f}",
                    'protein': f"{alt['Protein']:.1f}g vs {original['Protein']:.1f}g",
                    'fiber': f"{alt['Dietary Fiber']:.1f}g vs {original['Dietary Fiber']:.1f}g",
                    'vitamins': {
                        'C': f"{alt['Vit C']:.1f}mg vs {original['Vit C']:.1f}mg",
                        'A': f"{alt['Vit A, RAE']:.1f}µg vs {original['Vit A, RAE']:.1f}µg"
                    }
                }
            }

            if alt['Protein'] > original['Protein']:
                comparison['reason'].append('Higher in protein')
            if alt['Dietary Fiber'] > original['Dietary Fiber']:
                comparison['reason'].append('Higher in fiber')
            if alt['Energy'] < original['Energy']:
                comparison['reason'].append('Lower in calories')
            if alt['Vit C'] > original['Vit C']:
                comparison['reason'].append('Higher in Vitamin C')

            comparisons.append(comparison)

        return comparisons

    except (IndexError, KeyError):
        return []