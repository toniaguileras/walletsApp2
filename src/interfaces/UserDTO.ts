import { WalletDTO } from "./WalletDTO";

export interface UserDTO {
  id: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  wallets: WalletDTO[];
}
