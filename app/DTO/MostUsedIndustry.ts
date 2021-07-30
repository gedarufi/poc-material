export interface IMostUsedIndustry {
  code?: string;
  locale: string;
  name: string;
  recurrence?: number;
  active: boolean;
}

export class MostUsedIndustry {
  public code?: string;
  public locale: string;
  public name: string;
  public recurrence?: number;
  public active: boolean;

  constructor(data: IMostUsedIndustry) {
    this.code = data.code;
    this.locale = data.locale;
    this.name = data.name;
    this.recurrence = data.recurrence;
    this.active = false;
  }
}
