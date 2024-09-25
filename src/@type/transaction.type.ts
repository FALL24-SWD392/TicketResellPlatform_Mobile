export enum TransactionStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export interface Transaction {
  id: string;
  userId: string;
  subscriptionId: string;
  status: TransactionStatus;
  createdAt: Date;
  updatedAt: Date;
}
