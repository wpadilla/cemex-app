export type IOrderStatusTypes = 'Active' | 'Pending Approval' | 'Waiting Compensation';
export type IOrderPhaseTypes = 'Deployment' | 'Research' | 'Ideation' | 'Development';

export interface IOrders {
  status: IOrderStatusTypes;
  supplierName: string;
  month: string;
  phase: IOrderPhaseTypes;
  internalOrder: number;
  amount: number;
}
