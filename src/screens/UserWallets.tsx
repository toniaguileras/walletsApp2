import React from "react";
import {WalletDTO} from "../interfaces/WalletDTO";
import {getWalletsByUserId, transferMoney} from "../services/WalletsService";
import {getWalletsAvailable} from "../services/WalletsService";
import {getUserById} from "../services/UserService";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {RouteComponentProps} from "react-router";
import {UserDTO} from "../interfaces/UserDTO";

interface MyProps extends RouteComponentProps<{ id: string }> {
}

class UserWallets extends React.Component<MyProps> {
    constructor(
        props: MyProps,
        public state: {
            userId: string,
            originWalletId: number,
            destinationWalletId: number,
            dropdownValue: string,
            wallets: WalletDTO[],
            userWallets: WalletDTO[],
            quantity: number[],
            userDTO: UserDTO

        }
    ) {
        super(props);
        this.state = {
            userId: this.props.match.params.id,
            dropdownValue: "Select a destination wallet",
            wallets: [],
            userWallets: [],
            quantity: [],
            destinationWalletId: 0,
            originWalletId: 0,
            userDTO: {email: "", username: "", name: "", surname: "", id: 0, wallets: [], role: ""}
        };
    }

    componentDidMount() {
        this.getWalletsByUserId(parseInt(this.state.userId));
        this.getWalletsAvailable(parseInt(this.state.userId));
        this.getUserById(parseInt(this.state.userId));
    }

    getWalletsByUserId(userId: number) {
        getWalletsByUserId(userId).then((walletsJson) =>
            this.setState({userWallets: walletsJson, quantity: new Array(walletsJson.length).fill(0)})
        );
    }

    getWalletsAvailable(userId: number) {
        getWalletsAvailable(userId).then((walletsJson) => this.setState({wallets: walletsJson}));
    }

    getUserById(userId: number) {
        getUserById(userId).then((userJson) => this.setState({userDTO: userJson}));
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
                {this.state.userWallets.length > 0 ? (
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
                                        {this.state.userDTO.role === "ADMIN" ? (
                                            <form onSubmit={(e) => this.handleSubmit(e, i)}
                                                  className=" justify-content-between mx-2 ">
                                                <label>
                                                    Quantity:<br/>
                                                    <input
                                                        type="number"
                                                        name="quantity"
                                                        value={this.state.quantity[i]}
                                                        onChange={(e) => this.handleChange(e, i)}
                                                    />
                                                </label>
                                                <input className="p-1 btn btn-outline-primary" type="submit"
                                                       value="Transfer"/>
                                            </form>
                                        ) : (
                                            <div className="justify-content-between mx-2 my-4 text-secondary">
                                                <p>User cannot make transfer because of his role.</p>
                                            </div>
                                        )}
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
                ) : (
                    <div className="d-flex justify-content-center">
                        <p>This user has no wallets. Please contact with support.</p>
                    </div>
                )}
            </div>
        );
    }
}

export default UserWallets;
