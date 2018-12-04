import { Moment } from 'moment';
import { IJob } from 'app/shared/model//job.model';
import { IDepartment } from 'app/shared/model//department.model';
import { IEmployee } from 'app/shared/model//employee.model';

export const enum Language {
  CHINESE = 'CHINESE',
  ENGLISH = 'ENGLISH'
}

export interface IJobHistory {
  id?: number;
  startDate?: Moment;
  endDate?: Moment;
  language?: Language;
  job?: IJob;
  department?: IDepartment;
  employee?: IEmployee;
}

export const defaultValue: Readonly<IJobHistory> = {};
