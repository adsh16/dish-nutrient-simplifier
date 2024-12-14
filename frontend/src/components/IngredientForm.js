import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import NutritionResult from './NutritionResult';
import AlternateIngredients from './alternateIngredients';
import Papa from 'papaparse'; 
import '../components/index.css';

const API_BASE_URL = "https://dish-nutrient-simplifier.onrender.com";

function IngredientForm() {
  const [ingredients, setIngredients] = useState([
    { name: '', quantity: '', description: '' }
  ]);
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [foodDescriptions, setFoodDescriptions] = useState([]);
  const [alternatives, setAlternatives] = useState({});

  useEffect(() => {
    async function fetchFoodDescriptions() {
      try {
        const response = await fetch('./nutrient_per_100g.csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const descriptions = result.data.map((row) => row['Food Description'].trim());
            setFoodDescriptions(descriptions);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } catch (error) {
        console.error('Error loading CSV file:', error);
      }
    }

    fetchFoodDescriptions();
  }, []);

  const fetchAlternatives = async (ingredientName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/alternatives/${encodeURIComponent(ingredientName)}`);
      const data = await response.json();
      setAlternatives(prevState => ({
        ...prevState,
        [ingredientName]: data.alternatives
      }));
    } catch (error) {
      console.error('Error fetching alternatives:', error);
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', description: '' }]);
  };

  const deleteIngredient = (index) => {
    if (ingredients.length === 1) {
      return;
    }
    
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
    
    if (alternatives[ingredients[index].name]) {
      const newAlternatives = { ...alternatives };
      delete newAlternatives[ingredients[index].name];
      setAlternatives(newAlternatives);
    }
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
    
    if (field === 'name' && value) {
      fetchAlternatives(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();
      setNutritionData(data);
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Typeahead
                  id={`ingredient-name-${index}`}
                  options={foodDescriptions}
                  placeholder="Ingredient name"
                  onChange={(selected) => {
                    handleIngredientChange(index, 'name', selected[0] || '');
                  }}
                  selected={ingredient.name ? [ingredient.name] : []}
                  className="border rounded-md"
                  inputProps={{
                    required: true,
                    className: 'border rounded-md p-2',
                  }}
                />
                <input
                  type="number"
                  placeholder="Quantity (g)"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                  className="border rounded-md p-2"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Description (optional)"
                    value={ingredient.description}
                    onChange={(e) => handleIngredientChange(index, 'description', e.target.value)}
                    className="border rounded-md p-2 flex-grow"
                  />
                  <button
                    type="button"
                    onClick={() => deleteIngredient(index)}
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 disabled:bg-red-300"
                    disabled={ingredients.length === 1}
                    aria-label="Delete ingredient"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              {alternatives[ingredient.name] && (
                <div className="ml-4">
                  <AlternateIngredients 
                    alternatives={alternatives[ingredient.name]}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 space-x-4">
          <button
            type="button"
            onClick={addIngredient}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Add Ingredient
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Dish'}
          </button>
        </div>
      </form>

      {nutritionData && <NutritionResult data={nutritionData} />}
    </div>
  );
}

export default IngredientForm;