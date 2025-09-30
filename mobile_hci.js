// Module 7CS069 Web Technologies
// Week 3 - Mobile HCI

// Form component for entering username/password

class UsernamePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', password: '', rememberUsername: false};
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberUsernameChange = this.handleRememberUsernameChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
  }

  handleUserNameChange(userNameEvent) {
    const userName = userNameEvent.target.value;
    console.log("handleUsernameChange " + userName);
    this.setState(
      {userName: userName,
       password: this.state.password,
       rememberUsername: this.state.rememberUsername});
  }

  handlePasswordChange(passwordEvent) {
    const password = passwordEvent.target.value;
    console.log("handlePasswordChange " + password);
    this.setState(
      {userName: this.state.userName,
       password: password,
       rememberUsername: this.state.rememberUsername});
  }

  handleRememberUsernameChange(rememberUsernameEvent) {
    const rememberUsername = rememberUsernameEvent.target.checked;
    console.log("handleRememberUsernameChange " + rememberUsername);
    this.setState(
      {userName: this.state.userName,
       password: this.state.password,
       rememberUsername: rememberUsername});
  }

  handleSubmitChange(submit) {
    console.log("handleSubmitChange '" + this.state.userName + "'");
    this.props.onSubmitChange(
      this.state.userName,
      this.state.password,
      this.state.rememberUsername);
  }

  render() {
    return (
      <form>
        <div className="mb-3">
          <label className="form-label" formAction="handleUsernameChange">
            Email address
          </label>
          <input
            type="email" className="form-control" id="userName"
            aria-describedby="emailHelp"
            value={this.props.username}
            onChange={this.handleUserNameChange} />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password" className="form-control" id="password"
            value={this.props.password}
            onChange={this.handlePasswordChange} />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label">Remember username</label>
          <input
            type="checkbox" className="form-check-input" id="rememberUsername"
            checked={this.props.rememberUsername}
            onChange={this.handleRememberUsernameChange} />
        </div>
        <button
          type="submit" className="btn btn-primary"
          onClick={this.handleSubmitChange}>
          Submit
        </button>
      </form>
    );
  }
}

// Grid component
// - column is col-<screen size>-<number out of 12 to use>
// - screen size is
//   - xs (< 768px)
//   - sm (< 992px)
//   - md (< 1200px)
//   - lg (otherwise)

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    // Handler for login form submit button change
    this.handleLoginFormSubmitChange = this.handleLoginFormSubmitChange.bind(this);
  }

  handleLoginFormSubmitChange(userName, password, rememberUsername) {
    alert("Login form submitted" +
          "\n  user name '" + userName + "'" +
          "\n  password  '" + password + "'" +
          "\n  remember  "  + rememberUsername);
  }

  render() {
    return (
      <div className="container text-center position-relative top-0 start-25">
        <div className="row">
          <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 p-3 align-middle align-self-center">
            Welcome to John Hillan's William Shakespeare Page
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3 p-3 align-middle align-self-center">
            <img src="Shakespeare.jpg" className="img-thumbnail" />
          </div>
          <div className="col-xs-4 col-sm-5 col-md-6 col-lg-7 p-3 align-middle align-self-center">
            <UsernamePasswordForm
              onSubmitChange={this.handleLoginFormSubmitChange} />
          </div>
        </div>
      </div>
    );
  }
}

// Mobile HCI Application

function App() {

  return (
    <div className="App">
      <br />
      <GridComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);