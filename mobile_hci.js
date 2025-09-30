// Module 7CS069 Web Technologies
// Week 3 - Mobile HCI

// Navigation Bar component

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navigation Bar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Links
                </a>
                <ul className="dropdown-menu">
                  <li> Internal Links (links open in same tab)</li>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> External Links (links open in a new tab)</li>
                  <li><a className="dropdown-item" href="https://www.rsc.org.uk" target="_blank">Royal Shakespeare Company</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

// Form component for logging in with username/password

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', password: '', rememberUsername: false};
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberUsernameChange = this.handleRememberUsernameChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
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

  handleSubmitClick(submit) {
    event.preventDefault();
    console.log("LoginForm handleSubmitClick");
    this.props.onSubmitClick(
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
          onClick={this.handleSubmitClick}>
          Log In
        </button>
      </form>
    );
  }
}

// Form component for logging out

class LogoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick(submit) {
    event.preventDefault();
    console.log("LogoutForm handleSubmitClick");
    this.props.onSubmitClick();
  }

  render() {
    return(
        <button
          type="submit" className="btn btn-primary"
          onClick={this.handleSubmitClick}>
          Log Out
        </button>
    );
  }
}

// Login/Logout Column

class LoginLogout extends React.Component {
  constructor(props) {
    super(props);
    // Handler for login form submit button change
    this.handleLoginFormSubmitClick = this.handleLoginFormSubmitClick.bind(this);
    // Handler for logout form submit button change
    this.handleLogoutFormSubmitClick = this.handleLogoutFormSubmitClick.bind(this);
  }

  handleLogoutFormSubmitClick(logout) {
    event.preventDefault();
    alert("Logout complete");
    this.props.onSuccessfulLogout();
  }

  checkUserNameAndPassword (userName, password) {
    // MISSING
    const loginSuccessful = ((userName === "John") && (password === "myPassword"));
    return (loginSuccessful);
  }

  handleLoginFormSubmitClick(userName, password, rememberUsername) {
    event.preventDefault();
    // Check that the username/password is valid
    const loginSuccessful = this.checkUserNameAndPassword (userName, password);
    if (loginSuccessful) {
      alert("Login form submitted" +
            "\n  user name '" + userName + "'" +
            "\n  password  '" + password + "'" +
            "\n  remember  "  + rememberUsername);
      this.props.onSuccessfulLogin();
    } else {
      alert("Invalid username/password. Please try again.");
    }
  }

  render() {
    const LoginOrLogout =
      this.props.loggedIn ?
      <LogoutForm onSubmitClick={this.handleLogoutFormSubmitClick} /> :
      <LoginForm  onSubmitClick={this.handleLoginFormSubmitClick} />;
    return (LoginOrLogout);
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
    //// Handler for login form submit button change
    //this.handleLoginFormSubmitClick = this.handleLoginFormSubmitClick.bind(this);
    this.handleLogin  = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //handleLoginFormSubmitClick(userName, password, rememberUsername) {
  //  alert("Login form submitted" +
  //        "\n  user name '" + userName + "'" +
  //        "\n  password  '" + password + "'" +
  //        "\n  remember  "  + rememberUsername);
  //}

  handleLogin(e) {
    event.preventDefault();
    console.log("GridComponent handleLogin");
    this.props.onLogin();
  }

  handleLogout(e) {
    event.preventDefault();
    console.log("GridComponent handleLogout");
    this.props.onLogout();
  }

  render() {
    return (
      <div className="container-fluid text-center position-relative top-0 start-25">
        <div className="row">
          <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 p-3 align-middle align-self-center">
            Welcome to John Hillan's William Shakespeare Page
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3 p-3 align-middle align-self-center">
            <img src="Shakespeare.jpg" className="img-thumbnail" />
          </div>
          <div className="col-xs-4 col-sm-5 col-md-6 col-lg-7 p-3 align-middle align-self-center">
            <LoginLogout loggedIn={this.props.loggedIn} onSuccessfulLogin={this.handleLogin} onSuccessfulLogout={this.handleLogout} />
          </div>
        </div>
      </div>
    );
  }
}

// Single Page "Shakespeare" Application

class ShakespeareSinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
    //this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLogin  = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //handleLoginChange(newLoggedIn) {
  //  //console.log("ShakespeareSinglePage login state " + newLoggedIn);
  //  this.setState(loggedIn: newLoggedIn);
  //  //console.log("ShakespeareSinglePage login state " + this.state.loggedIn);
  //}

  handleLogin(e) {
    event.preventDefault();
    console.log("ShakespeareSinglePage handleLogin");
    this.setState({loggedIn: true});
  }

  handleLogout(e) {
    event.preventDefault();
    console.log("ShakespeareSinglePage handleLogout");
    this.setState({loggedIn: false});
  }

  render() {
    return (
      <div className="ShakespeareSinglePage">
        <NavigationBar />
        <br />
        <GridComponent loggedIn={this.state.loggedIn} onLogin={this.handleLogin} onLogout={this.handleLogout} />
      </div>
    );
  }
}

// Mobile HCI Application

function App() {

  return (
    <div className="App">
      <ShakespeareSinglePage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);