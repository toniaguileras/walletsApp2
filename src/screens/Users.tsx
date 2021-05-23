import React from "react";
import { Link } from "react-router-dom";
import CardProfile from "./CardProfile";
import { getUsers } from "../services/UserService";
import { UserDTO } from "../interfaces/UserDTO";

class Users extends React.Component {
  constructor(props: Readonly<unknown>, public state: { users: UserDTO[] }) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    getUsers().then((usersJson) => this.setState({ users: usersJson }));
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-left mt-4">
          <Link className="link-dark" to="/">
            Home
          </Link>
        </div>
        <div>
          <h3 className="d-flex justify-content-center mt-1 mb-4">
            Users Page
          </h3>
          <div className="d-flex justify-content-center">
            {this.state.users.map((user, i) => {
              return (
                <div className="mx-3" key={i}>
                  <CardProfile
                    id={user.id}
                    name={user.name}
                    surname={user.surname}
                    email={user.email}
                    username={user.username}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Users;
