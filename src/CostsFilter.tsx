import { CostsFilterProps } from './types';

export default function CostsFilter({ onChangeYear, year }: CostsFilterProps) {
  const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeYear(e.target.value);
  };

  return (
    <div className='costs-filter'>
      <div className='costs-filter__control'>
        <label>Choose the Year</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
}
