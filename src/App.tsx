import './App.css';
import { useState } from 'react';
import { initialCosts } from './initialCosts';
import { AddCosts } from './types';
import NewCosts from './NewCost';
import Costs from './Costs';

export default function App() {
  const [costs, setCosts] = useState(initialCosts);

  const addCosts: AddCosts = (newData) => {
    setCosts((prevState) => [...prevState, newData]);
  };

  return (
    <div>
      <NewCosts addCosts={addCosts} />
      <Costs costs={costs} />
    </div>
  );
}
