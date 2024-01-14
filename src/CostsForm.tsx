import { useState } from 'react';
import { AddCosts, SetEditing } from './types';

interface CostsFormProps {
  addCosts: AddCosts;
  setEditing: SetEditing;
}

export default function CostsForm({ setEditing, addCosts }: CostsFormProps) {
  const [cost, setCost] = useState({ title: '', price: '', date: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCost({ ...cost, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addCosts({ id: Date.now(), title: cost.title, price: Number(cost.price), date: new Date(cost.date) });
    setCost({ title: '', price: '', date: '' });
    setEditing(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Title</label>
          <input type='text' name='title' value={cost.title} onChange={handleChange} required />
        </div>
        <div className='new-cost__control'>
          <label>Price</label>
          <input type='number' min='0.01' step='0.01' name='price' value={cost.price} onChange={handleChange} required />
        </div>
        <div className='new-cost__control'>
          <label>Data</label>
          <input type='date' min='2019-01-01' step='2022-12-31' name='date' value={cost.date} onChange={handleChange} required />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Add</button>
          <button type='button' onClick={() => setEditing(true)}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
