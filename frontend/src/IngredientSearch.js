import React, { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import Papa from "papaparse";
import "react-bootstrap-typeahead/css/Typeahead.css";

function IngredientSearch() {
    const [foodDescriptions, setFoodDescriptions] = useState([]); 
    const [selectedIngredient, setSelectedIngredient] = useState(""); 

    
    useEffect(() => {
        fetch("/nutrient_per_100g.csv")
            .then((response) => response.text())
            .then((csvText) => {
                
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const descriptions = results.data.map((row) => row["Food Description"]).filter(Boolean);
                        setFoodDescriptions(descriptions);
                    },
                });
            })
            .catch((error) => console.error("Error loading CSV:", error));
    }, []);

    return (
        <div className="ingredient-search">
            <h3>Search for Ingredients</h3>
            <Typeahead
                id="ingredient-typeahead"
                options={foodDescriptions}
                onChange={(selected) => {
                    setSelectedIngredient(selected[0] || "");
                }}
                placeholder="Enter an ingredient name..."
                minLength={1} 
            />
            {selectedIngredient && (
                <p>
                    Selected Ingredient: <strong>{selectedIngredient}</strong>
                </p>
            )}
        </div>
    );
}

export default IngredientSearch;
