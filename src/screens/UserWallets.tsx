import React from "react";
import { WalletDTO } from "../interfaces/WalletDTO";
import { getWalletsByUserId } from "../services/WalletsService";
import { useLocation} from "react-router-dom"

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

class UserWallets extends React.Component {
  constructor(
    props: Readonly<unknown>,
    public state: {
      wallets: WalletDTO[];
      quantity: number;
      destinationWallet: number;
    }
  ) {
    super(props);
    this.state = {
      wallets: [],
      quantity: 0,
      destinationWallet: 0,
    };
  }
  componentDidMount() {
    let query = useQuery;
    console.log(query);
    this.getWalletsByUserId(1);
  }
  getWalletsByUserId(userId: number) {
    getWalletsByUserId(userId).then((walletsJson) =>
      this.setState({ wallets: walletsJson })
    );
  }

  render() {
          return (
      <div>
        <h3 className="d-flex justify-content-center mt-1 mb-4">
          User Wallets Page
        </h3>
        <div>
          {this.state.wallets.map((wallet, i) => {
            return (
              <div className="my-3 border" key={i}>
                <div className="p-3">
                  <p className="ml-2">
                    <b>Name:</b> {wallet.name}
                  </p>
                  <p className="ml-2">
                    <b>Amount:</b> {wallet.amount}
                  </p>
                  <form>
                    <label>
                      Quantity:
                      <input
                        type="number"
                        name="quantity"
                      />
                    </label>
                    <div className="float-right ml-3">
                      <input type="submit" value="Transfer" />
                    </div>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserWallets;
