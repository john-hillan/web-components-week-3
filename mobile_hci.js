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
  }

  render() {
    return (
      <div class="container text-center position-relative top-0 start-25">
        <div class="row">
          <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 p-3 align-middle align-self-center">
            This is the content for column 1 which is relatively brief
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3 p-3 align-middle align-self-center">
            This is the content for column 2 which will normally be slightly longer than the left hand column
          </div>
          <div class="col-xs-4 col-sm-5 col-md-6 col-lg-7 p-3 align-middle align-self-center">
            This is the content for column 3 which is meant to be where much longer pieces of text such as full reviews can be placed as opposed to the first two fields which could be an index and a summary
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