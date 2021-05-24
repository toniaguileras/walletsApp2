import React from "react";
import {WalletDTO} from "../interfaces/WalletDTO";
import {getWalletsByUserId, transferMoney} from "../services/WalletsService";
import {getWalletsAvailable} from "../services/WalletsService";
import {Dropdown, DropdownButton} from "react-bootstrap";

class UserWallets extends React.Component {
    constructor(
        props: Readonly<unknown>,
        public state: {
            originWalletId: number,
            destinationWalletId: number,
            dropdownValue: string,
            wallets: WalletDTO[];
            userWallets: WalletDTO[];
            quantity: number[];

        }
    ) {
        super(props);
        this.state = {
            dropdownValue: "Select a destination wallet",
            wallets: [],
            userWallets: [],
            quantity: [],
            destinationWalletId: 0,
            originWalletId: 0
        };
    }

    componentDidMount() {
        this.getWalletsByUserId(1);
        this.getWalletsAvailable(1);
    }

    getWalletsByUserId(userId: number) {
        getWalletsByUserId(userId).then((walletsJson) =>
            this.setState({userWallets: walletsJson, quantity: new Array(walletsJson.length).fill(0)})
        );
    }

    getWalletsAvailable(userId: number) {
        getWalletsAvailable(userId).then((walletsJson) => this.setState({wallets: walletsJson}));
    }

    transferMoney(originWallet: number, destinationWallet: number, amount: number) {

        transferMoney({
            originWallet,
            destinationWallet,
            amount
        }).then((walletJson) => {
            let modifiedUserWallets = this.state.userWallets.map((wallet) => {
                if (wallet.id === walletJson.id) {
                    wallet = walletJson;
                }
                return wallet;
            });
            this.setState({userWallets: modifiedUserWallets});
        });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>, i: number) => {
        event.preventDefault();
        this.transferMoney(this.state.userWallets[i].id, this.state.destinationWalletId, this.state.quantity[i]);

    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {

        let positionedQuantity = this.state.quantity.map((quantity, index) => {
            if (index === i && event.target.value) {
                quantity = parseInt(event.target.value, 10);
            }
            return quantity;
        });
        this.setState({quantity: positionedQuantity})
    }

    changeValue(text: string | null, walletObject: WalletDTO) {
        this.setState({dropdownValue: text, destinationWalletId: walletObject.id})
    }


    render() {
        return (
            <div>
                <h3 className="d-flex justify-content-center mt-1 mb-4">
                    User Wallets Page
                </h3>
                <div>
                    {this.state.userWallets.map((wallet, i) => {
                        return (
                            <div className=" d-flex justify-content-between my-3 border" key={i}>
                                <div className="p-3">
                                    <p className="ml-2">
                                        <b>Name:</b> {wallet.name}
                                    </p>
                                    <p className="ml-2">
                                        <b>Amount:</b> {wallet.amount}
                                    </p>
                                </div>
                                <div>
                                    <form onSubmit={(e) => this.handleSubmit(e, i)}
                                          className="justify-content-between mx-2">
                                        <label>
                                            Quantity:<br/>
                                            <input
                                                type="number"
                                                name="quantity"
                                                value={this.state.quantity[i]} onChange={(e) => this.handleChange(e, i)}
                                            />
                                        </label>
                                        <input className="p-1 btn btn-outline-primary" type="submit" value="Transfer"/>
                                    </form>
                                </div>
                            </div>
                        );
                    })}
                    <div className="d-flex justify-content-center mt-3">
                        <DropdownButton title={this.state.dropdownValue}>
                            {this.state.wallets.map((wallet, i) => {
                                return (<Dropdown.Item as="button" eventKey={wallet.name} key={i}
                                                       onSelect={(eventKey) => this.changeValue(eventKey, wallet)}>
                                    {wallet.name}
                                </Dropdown.Item>)
                            })}
                        </DropdownButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserWallets;
