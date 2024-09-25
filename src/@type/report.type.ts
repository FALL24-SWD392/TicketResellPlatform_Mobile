export enum ReportStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
}   

export interface Report {
    id: string;
    reporterId: string;
    reportedId: string;
    orderId: string;
    description: string;
    status: ReportStatus;
    createdAt: Date;
    updatedAt: Date;    
    createdBy: string;
    updatedBy: string;
}