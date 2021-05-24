import { TransferDTO } from "../interfaces/TransferDTO";

export function  getWalletsAvailable(userIdParam: number){
  return fetch('http://localhost:8080/api/wallet/available/user?userId=' + userIdParam).then(res => res.json());
}
export function getWalletsByUserId(userIdParam: number) {
  return fetch(
    "http://localhost:8080/api/wallet/user?userId=" + userIdParam
  ).then((res) => res.json());
}

export function transferMoney(data: TransferDTO) {
  return fetch("http://localhost:8080/api/wallet/transfer", {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
