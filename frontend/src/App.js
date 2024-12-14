// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import IngredientForm from './components/IngredientForm';
// import Introduction from './Introduction';
// import Contact from './components/Contact';
// import FAQ from './components/FAQ';
// import Dataset from './components/Dataset';
// import DontKnow from './components/DontKnow'; 
// import Footer from './components/Footer';
// import './components/index.css';


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <Introduction />
//                 <IngredientForm />
//               </>
//             } />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/faqs" element={<FAQ />} />
//             <Route path="/Dontknow" element={<DontKnow />} /> 
//             <Route path="/dataset" element={<Dataset />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import IngredientForm from './components/IngredientForm';
import Introduction from './Introduction';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Dataset from './components/Dataset';
import DontKnow from './components/DontKnow'; 
import Footer from './components/Footer';
import './components/index.css';
import DishIT from './dishit';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== '/' && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <Introduction />
            </>
          } />
          <Route path="/dishit" element={
            <>
              <DishIT />
              <IngredientForm />              
            </>
          } />
          <Route path="/ingredient-form" element={<IngredientForm />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/Dontknow" element={<DontKnow />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/Dontknow" element={<DontKnow />} /> 
          <Route path="/dataset" element={<Dataset />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;