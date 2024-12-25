import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Loan Approval Prediction Based on Tabu Search Optimization Technique",
      description: "I have developed a project on Loan Approval Prediction Using Tabu Search Optimization. The project aims to predict loan approvals using machine learning models like Random Forest, Logistic Regression, SVM, KNN, and Decision Trees, enhanced with Tabu Search optimization. Tabu Search, a meta-heuristic optimization technique, was applied for feature selection and hyperparameter tuning, enabling better exploration of the solution space and avoiding local optima. This approach improved model performance, achieving a highest accuracy of 98% with Tabu Search. The optimization helped maximize loan approvals while minimizing risks, demonstrating its effectiveness in the financial domain."
    },
    {
      title: "Online Payment Fraud Detection using Ant Colony Optimization (ACO)",
      description: "I have developed a project on Online Payment Fraud Detection System which aims to identify fraudulent transactions using machine learning models such as Random Forest, Logistic Regression, SVM, KNN, Decision Tree, Gradient Boosting, and ANN. To enhance model performance, Ant Colony Optimization (ACO) was applied for feature selection and hyperparameter tuning, inspired by the foraging behavior of ants. ACO was chosen for its ability to efficiently explore the solution space and optimize parameters, improving model accuracy. Among the models, the ANN optimized with ACO achieved the highest accuracy of 98.7%, effectively detecting fraud while minimizing errors. This highlights ACO's impact in refining fraud detection strategies."
    },
    {
      title: "Crop Recommendation using Machine Learning",
      description: "I have developed a project on Crop Recommendation System. It uses machine learning models like Random Forest, Decision Tree, Gradient Boosting, SVM, KNN, and Neural Networks to recommend suitable crops based on soil nutrients, temperature, humidity, pH, and rainfall. This project applies Exploratory Data Analysis (EDA), hyperparameter tuning, and ensemble techniques for accurate predictions. The Random Forest model achieved the highest accuracy of 99%, making it the most reliable for crop recommendation. By leveraging data-driven insights, the system enhances crop yield and profitability, aiding farmers in sustainable agriculture."
    },
    {
      title: "Water Quality Prediction using machine learning",
      description: "I have developed a project on Water Quality Prediction using images. The project focuses on predicting water quality using image datasets and machine learning models. Random Forest, SVM, and ANN were used due to their ability to handle complex data and extract features like color and texture. Random Forest achieved the best performance with an accuracy of 93.8%, leveraging its robustness against overfitting and ability to model non-linear relationships. This high accuracy demonstrates its reliability for water quality classification. The project emphasizes efficient and accurate water quality monitoring."
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
