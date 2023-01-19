export type IOrderStatusTypes = 'Active' | 'Pending Approval' | 'Waiting Compensation';
export type IOrderPhaseTypes = 'Deployment' | 'Research';

export interface IOrders {
  status: IOrderStatusTypes;
  supplierName: string;
  month: string;
  phase: IOrderPhaseTypes;
  internalOrder: number;
  amount: number;
}
