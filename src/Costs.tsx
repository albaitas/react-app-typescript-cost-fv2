import { useState } from 'react';
import CostsList from './CostsList';
import CostsDiagram from './CostsDiagram';
import CostsFilter from './CostsFilter';
import Card from './UI/Card';
import { ICosts, ICost } from './types';

export default function Costs({ costs }: ICosts) {
  const [selectedYear, setSelectedYear] = useState('2024');

  const yearChangeHandler = (year: string) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter((cost: ICost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
}
