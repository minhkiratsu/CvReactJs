import '../../css/App.css';
import Header from '../Header/Header'
import Left_container from '../Left_container/Left_container'
import Right_container from '../Right_container/Right_container'
import Test_re from '../Test_re/Test_re'

function App() {
  return (
    <div className="container-all">
      <div className="container">
        <Header/>
        <div className="container-lr">
          <Left_container/>
          <Right_container/>
          <Test_re/>
        </div>
      </div>
    </div>
  );
}

export default App;
