import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dbg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl " style={{color :"#006442", fontSize :"60px"}}>
            DishIT
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
            A resource for optimizing your Culinary Diet.
          </p>
          <div className="mt-8 flex justify-center space-x-3 ">
            <Link
              to="/ingredient-form"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              DishIT
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Contact Us
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              FAQs
            </Link>
            <Link
              to="/dataset"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Dataset
            </Link>
          </div>
        </div>
        <div className="mt-10 prose prose-indigo mx-auto">
          {/* <p>
            Cooking is the act of turning nature into the culture which has enabled the advent of the omnivorous human diet. The cultural wisdom of processing raw ingredients into delicious dishes is embodied in their cuisines. Recipes thus are the cultural capsules that encode elaborate cooking protocols for evoking sensory satiation as well as providing nourishment. As we stand on the verge of an epidemic of diet-linked disorders, it is eminently important to investigate the culinary correlates of dietary elements to probe their association with sensory responses as well as consequences for nutrition and health. 
          </p>
          <p>
            DishI is a structured compilation of recipes, ingredients, and nutrition profiles interlinkied with flavor profiles and health associations. The repertoire comprises of meticulous integration of over 1,18,000 recipes from cuisines across the globe (6 continents, 26 geo-cultural regions, and 74 countries), cooked using 268 processes (heat, cook, boil, simmer, bake, etc.), by blending over 23,500 ingredients from diverse categories, which are further linked to their flavor molecules (FlavorDB), nutritional profiles (USDA) and empirical records of disease associations obtained from Medline (DietRx). This resource is aimed at facilitating scientific explorations of the culinary space (recipe, ingredient, cooking processes, dietary styles, etc.) to taste attributes (flavor profile) and health (nutrition and disease associations) seeking for divergent applications.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;