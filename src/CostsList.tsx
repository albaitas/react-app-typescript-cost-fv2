import CostsItem from './CostsItem';
import { ICosts } from './types';

export default function CostsList({ costs }: ICosts) {
  if (costs.length === 0) {
    return <h2 className='cost-list__fallback'>There were no expenses this year</h2>;
  }
  return (
    <ul className='cost-list'>
      {costs.map((cost) => (
        <CostsItem key={cost.id} title={cost.title} price={cost.price} date={cost.date} />
      ))}
    </ul>
  );
}
