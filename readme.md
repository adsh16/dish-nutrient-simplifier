<p align="center">
  <img src="./DishIt Logo.png" alt="DishIT Logo" width="200">
</p>

<h1 align="center">DishIT: A Web-Based Nutritional Analysis Tool</h1>

<p align="center">
    An awesome project that optimizes the Nutrition Profile!
    <br />
    <strong>Explore the docs »</strong>
    <br />
    <br />
    <a href="https://dish-nutrient-simplifier-cn9t.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/adsh16/dish-nutrient-simplifier/issues">Report Bug</a>
    ·
    <a href="https://github.com/adsh16/dish-nutrient-simplifier/issues">Request Feature</a>
    <br />
</p>


DishIT is a full-stack web application that simplifies complex nutritional data into actionable insights. By leveraging a robust dataset from the USDA FoodData Central and integrating advanced algorithms, DishIT empowers users to analyze recipes, explore nutrient-dense ingredients, and optimize their dietary choices.

## Features

1. **Nutritional Data Collection**  
   - A comprehensive dataset from USDA FoodData Central containing food descriptions and macronutrient profiles.  

2. **Nutritional Analysis Engine**  
   - Analyze the nutritional profile of recipes based on user inputs like protein, carbohydrate, and sugar requirements.

3. **Ingredient Substitution Logic**  
   - Suggest alternative ingredients that align with user dietary preferences or restrictions.

4. **Interactive Web Interface**  
   - Built with React.js for a dynamic and user-friendly experience.  

5. **Recipe Improvement Suggestions**  
   - Recommend ingredients or recipes to meet specific nutrient goals.

## Technology Stack

- **Frontend:** React.js (hosted on Vercel)  
- **Backend:** Flask (hosted on Render)  
- **Database:** CSV dataset preprocessed using Pandas and NumPy  

## Methodology

1. **Preprocessing and Cleaning**  
   - Removed invalid entries, handled missing values, and standardized columns.  
   - Extracted relevant macronutrient data (protein, carbohydrates, sugars).  

2. **Nutritional Profile Analysis**  
   - Identify top ingredients based on user-input nutrient requirements.  
   - Dynamic search for nutrient-dense options.  

3. **Ingredient Substitution**  
   - Recommend alternatives considering nutritional equivalence and dietary restrictions.  

4. **Frontend and Backend Integration**  
   - API endpoints built with Flask serve nutritional data and handle ingredient recommendations.  
   - React-bootstrap-typeahead enhances search functionality on the user interface.

## How to Use

1. Input your daily nutrient intake goals (e.g., protein, carbohydrates, sugars).  
2. Explore ingredient suggestions tailored to your needs.  
3. Get recipe improvement suggestions for healthier alternatives.  

## Results

- Accurate analysis of ingredient and recipe nutritional profiles.  
- Personalized dietary recommendations for various dietary needs and preferences.  
- A seamless, intuitive user experience bridging data-driven insights and culinary exploration.

## Future Scope

- Expand the dataset to include regional and rare ingredients.  
- Integrate machine learning models for personalized recipe suggestions.  
- Add dietary filters like vegan, gluten-free, or low-fat options.  
- Develop a mobile application for wider accessibility.

## Installation

### Prerequisites
- Node.js and npm
- Python 3.x
- Flask

### Steps
1. Clone this repository:  
   ```bash
   git clone https://github.com/yourusername/DishIT.git
   ```
2. Install frontend dependencies:  
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:  
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
4. Run the backend server:  
   ```bash
   python app.py
   ```
5. Run the frontend application:  
   ```bash
   cd frontend
   npm start
   ```

## Contributors

- **Aditya Sharma**  
  - Preprocessing, Nutritional Analysis, Flask API Development, Deployment
- **Akshat Raj Saxena**  
  - Frontend Development, React Components, Implementing Algorithmic Logic 
- **Kanishk Kumar Meena**  
  - Dataset Management, Algorithm Design, Testing, Frontend

## References

- [USDA FoodData Central](https://fdc.nal.usda.gov/)  
- [Python Documentation](https://docs.python.org/3/)  
- [React Bootstrap Typeahead](https://github.com/ericgio/react-bootstrap-typeahead)

---

### Hosted Application Links
- **Frontend**: [Vercel](https://your-vercel-link.com)  
- **Backend**: [Render](https://your-render-link.com)

### License
This project is open source and available under the [MIT License](LICENSE).
