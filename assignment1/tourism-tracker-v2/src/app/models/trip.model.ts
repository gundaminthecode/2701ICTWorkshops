export class Trip {
    constructor(
      public journeyName: string, 
      public locations: string[], 
      public locationDates: string[],
      public dateStarted: string, 
      public complete: boolean,
      public dateEnded?: string,
    ) {}
  }
  