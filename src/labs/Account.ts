class Account {
   nickname?: string;

   constructor(
      public readonly id: number, 
      public owner: string, 
      private _balance: number, 
      nickname?: string) {
      // this.nickname = nickname;
   }

   deposit(amount: number): void {
      if(amount <= 0)
      this._balance += amount;
   }

   get balance(): number {
      return this._balance;
   }
   set balance(value: number) {
      if(value < 0) {
         throw new Error('Invalid balance');
      }
      this._balance = value;
   }
}

let account = new Account(1, 'John Doe', 100);
account.balance = 20;


