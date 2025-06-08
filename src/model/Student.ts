import { Address } from "./Address";
import { Course } from "./Course";
import { Skill } from "./Skill";

export interface Student {
  id: number;
  name: string;
  gender: string; // Use 'string' for single character
  mobileNo: number;
  isMember: boolean;
  dob: string; // ISO string or use Date if parsing
  fee: number;
  email: string;
  password: string;
  joinedAt?: string; // or Date
  updatedAt?: string; // or Date

  localAddress: Address;

  skills: Skill[];

  courses: Course[];
}
