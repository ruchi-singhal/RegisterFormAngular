export class IRegistrationForm {
    constructor(
    public customerName: string,
    public customerAddress: string,
    public customerState: string,
    public customerProductSelection: string,
    public customerAnnualSpend: number){}
  }