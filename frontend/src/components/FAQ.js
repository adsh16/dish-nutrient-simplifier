import React from 'react';
import { useState } from 'react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is DishIT?",
      answer: "DishIT is an integrated platform that brings together ingredients, daily intake, and their detailed nutritional profiles. It is designed to serve as a comprehensive culinary and nutritional resource for users."
    },
    {
      id: 2,
      question: "What are the different concepts represented in DishIT, and how do they relate to each other?",
      answer: "DishIT incorporates key concepts such as Ingredients, Nutritional Profiles and Dietary Styles. These elements are interconnected to provide users with insights into the nutritional and culinary relationships between dishes and their ingredients."
    },
    {
      id: 3,
      question: "What types of queries are processed by DishIT?",
      answer: "DishIT processes a wide variety of queries, including searching for recipes by ingredient names, cuisine types, or dietary restrictions. It also generates detailed nutritional profiles for involving the particular ingredients that user want to."
    },
    {
      id: 4,
      question: "How do I use DishIT Search?",
      answer: "The DishIT Recipe Search feature allows you to explore recipes by entering keywords such as ingredient names, cuisine types, or specific recipe titles."
    },
    {
      id: 5,
      question: "What are the various ingredients within DishIT?",
      answer: "DishIT provides a collection of ingredient from diverse cuisines worldwide including their enchanced profile (like gluten-free, raw, cooked). It includes detailed ingredient lists and nutritional profiles for each ingredient, allowing users to explore dishes that match their dietary preferences."
    },
    {
      id: 6,
      question: "What are DishIT Statistics?",
      answer: "DishIT Statistics provide data-driven insights such as the most commonly used ingredients, average nutritional breakdowns of recipes, and dietary trends based on user interactions and database analysis."
    },
    {
      id: 7,
      question: "What are the prerequisites required to use DishIT?",
      answer: "DishIT requires users to have access to the platform through a web browser. No prior knowledge is necessary, but familiarity with basic nutritional terms can enhance the user experience."
    },
    {
      id: 8,
      question: "How does the 'Don't Know' feature work?",
      answer: "The 'Don't Know' feature allows users to input their daily protein, carbohydrate, and sugar intake goals. Based on this data, DishIT recommends the top 10 ingredients for each nutrient, helping users plan their meals effectively by including those ingredients in their daily intake."
    },
    {
      id: 9,
      question: "How does DishIT obtain the individual nutritional profiles of a ingredients",
      answer: "DishIT derives the nutritional profiles of ingredients using a pre-compiled database, which includes nutritional values per 100g for each ingredient. These values are used to calculate the contribution of each ingredient to a recipe's overall profile."
    },
    {
      id: 10,
      question: "How does DishIT estimate a ingredient's nutritional profile?",
      answer: "DishIT estimates a recipe's nutritional profile by aggregating the individual contributions of its ingredients, adjusted for their respective quantities in the recipe. This provides a comprehensive overview of the recipe's nutritional value."
    },
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg">
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => toggleQuestion(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Q{faq.id}. {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {activeQuestion === faq.id ? (
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </div>
              </button>
              {activeQuestion === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;