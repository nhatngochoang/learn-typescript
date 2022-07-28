function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContract3(partner: BusinessPartner): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    message = partner.isInShortList()
      ? "Sign a new contract with the supplier"
      : "Need to evaluate further";
  }

  return message;
}

// An toàn cho những kiểu do người dùng tự định nghĩa
