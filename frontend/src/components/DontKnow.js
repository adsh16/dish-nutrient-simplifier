import React, { useState } from 'react';
import Papa from 'papaparse';
import nutrientData from './nutrient_per_100g.csv';

const DontKnow = () => {
  const [proteinIntake, setProteinIntake] = useState('');
  const [carbIntake, setCarbIntake] = useState('');
  const [sugarIntake, setSugarIntake] = useState('');
  const [proteinResults, setProteinResults] = useState([]);
  const [carbResults, setCarbResults] = useState([]);
  const [sugarResults, setSugarResults] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Validate inputs
    if (!proteinIntake || !carbIntake || !sugarIntake) {
      setError('Please fill in all intake fields');
      return;
    }

    // Parse CSV file
    Papa.parse(nutrientData, {
      download: true,
      header: true,
      complete: (results) => {
        processNutrientData(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        setError('Failed to load nutrient data');
      }
    });
  };

  const processNutrientData = (data) => {
    // Convert intake to numbers
    const dailyProtein = parseFloat(proteinIntake);
    const dailyCarbs = parseFloat(carbIntake);
    const dailySugar = parseFloat(sugarIntake);

    // Filter and process ingredients
    const processIngredients = (nutrientKey, dailyIntake) => {
      return data
        .filter(item => {
          const nutrientValue = parseFloat(item[nutrientKey] || '0');
          // Calculate how many 100g portions would meet daily intake
          const portionsNeeded = dailyIntake / nutrientValue;
          
          // Only include ingredients that can help meet daily intake
          return nutrientValue > 0 && portionsNeeded > 0 && portionsNeeded <= 10;
        })
        .sort((a, b) => parseFloat(b[nutrientKey]) - parseFloat(a[nutrientKey]))
        .slice(0, 10);
    };

    // Process each nutrient type
    const proteinIngredients = processIngredients('Protein', dailyProtein);
    const carbIngredients = processIngredients('Carbohydrate', dailyCarbs);
    const sugarIngredients = processIngredients('Total Sugars', dailySugar);

    // Update state
    setProteinResults(proteinIngredients);
    setCarbResults(carbIngredients);
    setSugarResults(sugarIngredients);
  };

  const renderNutrientTable = (title, results, nutrientName) => {
    if (results.length === 0) return null;

    return (
      <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden bg">
        <h2 className="text-xl font-semibold p-4 bg-green-100 border-b">
          Top {title} Rich Ingredients
        </h2>
        <table className="w-full">
          <thead>
            <tr className="bg-green-50 text-green-800">
              <th className="p-3 text-left">Food Description</th>
              <th className="p-3 text-right">{nutrientName} per 100g</th>
              <th className="p-3 text-right">Portions Needed</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => {
              const nutrientValue = parseFloat(item[nutrientName]);
              const dailyIntake = nutrientName === 'Protein' 
                ? parseFloat(proteinIntake)
                : nutrientName === 'Carbohydrate'
                ? parseFloat(carbIntake)
                : parseFloat(sugarIntake);

              const portionsNeeded = nutrientValue > 0 
                ? Math.ceil(dailyIntake / nutrientValue)
                : 'N/A';

              return (
                <tr key={index} className="border-b hover:bg-green-50 transition">
                  <td className="p-3">{item['Food Description']}</td>
                  <td className="p-3 text-right">
                    {nutrientValue.toFixed(2)} g
                  </td>
                  <td className="p-3 text-right">
                    {portionsNeeded} x 100g
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Discover Your Nutrient-Rich Ingredients
      </h1>
      
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg p-8 mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label 
              htmlFor="protein" 
              className="block text-green-700 font-bold mb-2"
            >
              Daily Protein Intake (g)
            </label>
            <input
              type="number"
              id="protein"
              value={proteinIntake}
              onChange={(e) => setProteinIntake(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter protein intake"
              required
            />
          </div>
          
          <div>
            <label 
              htmlFor="carbs" 
              className="block text-green-700 font-bold mb-2"
            >
              Daily Carbohydrates Intake (g)
            </label>
            <input
              type="number"
              id="carbs"
              value={carbIntake}
              onChange={(e) => setCarbIntake(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter carbs intake"
              required
            />
          </div>
          
          <div>
            <label 
              htmlFor="sugar" 
              className="block text-green-700 font-bold mb-2"
            >
              Daily Total Sugar Intake (g)
            </label>
            <input
              type="number"
              id="sugar"
              value={sugarIntake}
              onChange={(e) => setSugarIntake(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter sugar intake"
              required
            />
          </div>
        </div>
        
        {error && (
          <div className="text-red-500 mt-4 text-center">
            {error}
          </div>
        )}
        
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Find Top Ingredients
          </button>
        </div>
      </form>
      
      {(proteinResults.length > 0 || carbResults.length > 0 || sugarResults.length > 0) && (
        <div className="grid md:grid-cols-3 gap-6">
          {renderNutrientTable('Protein', proteinResults, 'Protein')}
          {renderNutrientTable('Carbohydrate', carbResults, 'Carbohydrate')}
          {renderNutrientTable('Sugar', sugarResults, 'Total Sugars')}
        </div>
      )}
    </div>
    </div>
  );
};

export default DontKnow;