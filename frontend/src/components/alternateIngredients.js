import React from 'react';

const AlternateIngredients = ({ alternatives }) => {
  if (!alternatives || alternatives.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
      <div className="border-b pb-2">
        <h2 className="text-xl font-bold text-gray-800">
          Healthier Alternatives
        </h2>
      </div>
      <div className="space-y-4 mt-4">
        {alternatives.map((alt, index) => (
          <div key={index} className="p-4 border rounded-md bg-gray-50">
            <h3 className="text-lg font-semibold text-blue-600">
              Try: {alt.name}
            </h3>
            <div className="mt-2">
              <p className="text-gray-700">
                Why? {alt.reason.join(', ')}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700">Nutrition Comparison</h4>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>Calories: {alt.nutrition_comparison.calories}</li>
                  <li>Protein: {alt.nutrition_comparison.protein}</li>
                  <li>Fiber: {alt.nutrition_comparison.fiber}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Vitamins</h4>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>Vitamin C: {alt.nutrition_comparison.vitamins.C}</li>
                  <li>Vitamin A: {alt.nutrition_comparison.vitamins.A}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlternateIngredients;