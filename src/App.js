import React, { useState } from 'react';
import PortfolioContainer from './components/PortfolioContainer.js'

function App() {

  const [currentPage, setCurrentPage] = useState('aboutMe');
  const [tabbed, setLayout] = useState(false);

  return <PortfolioContainer currentPage={currentPage} tabbed={tabbed} setLayout={setLayout} setCurrentPage={setCurrentPage} />;

}

export default App;