import React from 'react';

function NutritionResult({ data }) {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Nutrition Analysis</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          
          <h3 className="font-semibold">Calories</h3>
          <p className="text-2xl">{Math.round(data.calories)} kcal</p>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold">Protein</h3>
          <p className="text-2xl">{data.protein.toFixed(1)}g</p>
        </div>
        
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold">Carbohydrates</h3>
          <p className="text-2xl">{data.carbohydrates.toFixed(1)}g</p>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="font-semibold">Fat</h3>
          <p className="text-2xl">{data.fat.toFixed(1)}g</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Analysis</h3>
        <ul className="list-disc pl-5">
          {data.analysis.map((text, index) => (
            <li key={index} className="text-gray-700">{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NutritionResult;