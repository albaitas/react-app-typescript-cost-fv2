import Card from './UI/Card';
import CostsDate from './CostsDate';
import { ICost } from './types';

export default function CostsItem({ date, title, price }: ICost) {
  return (
    <li>
      <div>
        <Card className='cost-item'>
          <CostsDate date={date} />
          <div className='cost-item__description'>
            <h2>{title}</h2>
          </div>
          <div className='cost-item__price'>{price} Eur</div>
        </Card>
      </div>
    </li>
  );
}
