export enum TicketStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  REMOVED = "REMOVED",
  TRADING = "TRADING",
  EXPIRED = "EXPIRED",
  SOLD = "SOLD",
}

export enum TicketType {
  MOVIE = "MOVIE",
  EVENT = "EVENT",
  VOUCHER = "VOUCHER",
  TRANSPORTATION = "TRANSPORTATION",
  AMUSEMENT = "AMUSEMENT",
  TOURIST = "TOURIST",
}

export interface Ticket {
  id: string;
  userId: string;
  title: string;
  type: TicketType;
  description: string;
  status: TicketStatus;
  price: number;
  quantity: number;
  image: string;
  expDate: Date;
  code: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
}
