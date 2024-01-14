import { useState } from 'react';
import Card from './UI/Card';
import CostsForm from './CostsForm';
import { AddCosts } from './types';

interface NewCostsProps {
  addCosts: AddCosts;
}

export default function NewCost({ addCosts }: NewCostsProps) {
  const [editing, setEditing] = useState(true);

  return (
    <div>
      <Card className='new-cost'>{editing ? <button onClick={() => setEditing(false)}>Add New Costs</button> : <CostsForm setEditing={setEditing} addCosts={addCosts} />}</Card>
    </div>
  );
}
