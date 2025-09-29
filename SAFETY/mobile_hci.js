// Module 7CS069 Web Technologies
// Week 3 - Mobile HCI

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
    this.state = {
      columnText1: props.columnText1,
      columnText2: props.columnText2,
      columnText3: props.columnText3};
  }

  render() {
    return (
      <div class="container text-center position-relative top-0 start-25">
        <div class="row">
          <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 p-3 align-middle align-self-center">
            {this.state.columnText1}
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3 p-3 align-middle align-self-center">
            {this.state.columnText2}
          </div>
          <div class="col-xs-4 col-sm-5 col-md-6 col-lg-7 p-3 align-middle align-self-center">
            {this.state.columnText3}
          </div>
        </div>
      </div>
    );
  }
}

// Mobile HCI Application

function App() {

  const columnText1 = "This is the content for column 1 which is relatively brief";
  const columnText2 = "This is the content for column 2 which will normally be slightly longer than the left hand column";
  const columnText3 = "This is the content for column 3 which is meant to be where much longer pieces of text such as full reviews can be placed as opposed to the first two fields which could be an index and a summary";

  return (
    <div className="App">
      <br />
      <GridComponent
        columnText1={columnText1}
        columnText2={columnText2}
        columnText3={columnText3}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);