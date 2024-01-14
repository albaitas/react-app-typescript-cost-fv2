import DiagramBar from './DiagramBar';
import Card from './UI/Card';

type IDataSet = {
  label: string;
  value: number;
};

type IDataSets = {
  dataSets: IDataSet[];
};

export default function Diagram({ dataSets }: IDataSets) {
  const dataSetsValues = dataSets.map((dataSet) => dataSet.value);

  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div>
      <Card className='diagram'>
        {dataSets.map((dataSet) => (
          <DiagramBar key={dataSet.label} value={dataSet.value} maxValue={maxMonthCosts} label={dataSet.label} />
        ))}
      </Card>
    </div>
  );
}
