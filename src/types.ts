export interface ICost {
  id?: number;
  title: string;
  price: number;
  date: Date;
}

export interface ICosts {
  costs: ICost[];
}
export interface IDate {
  date: Date;
}

export interface CostsFilterProps {
  onChangeYear: (year: string) => void;
  year: string;
}

export interface IDiagramBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export type AddCosts = (cost: ICost) => void;
export type SetEditing = (term: boolean) => void;
