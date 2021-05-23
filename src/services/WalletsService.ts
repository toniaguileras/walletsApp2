import { TransferDTO } from "../interfaces/TransferDTO";

export function  getWallets(){
  return fetch('http://localhost:8080/api/wallet').then(res => res.json());
}
export function getWalletsByUserId(userIdParam: number) {
  return fetch(
    "http://localhost:8080/api/wallet/user?userId=" + userIdParam
  ).then((res) => res.json());
}

export function transferMoney(data: TransferDTO) {
  return fetch("http://localhost:8080/api/wallet/transfer", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
