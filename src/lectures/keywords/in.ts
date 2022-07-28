function signContract2(partner: BusinessPartner): string {
  let message: string;
  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? "Sign a new contract the supplier "
      : "Need to evaluate further";
  }
  return message;
}

// kiểm tra sự tồn tại của 1 thuộc tính trong 1 đối tượng
