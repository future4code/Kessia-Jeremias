import User from "./user";

export class Customer extends User{
    public purchaseTotal: number = 0;
    private creditCard: string;

  constructor(id: string, email: string, name: string, password: string, credtiCard: string){
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = credtiCard;
  }  
  public getCreditCard(): string{
      return this.creditCard;
  }
}