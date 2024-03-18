class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string = "";
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further";
  }

  return message;
}
