import './App.css';
import Plate from './Components/Plate';
import { Route, Switch } from 'react-router-dom';
import Privacy from './Components/Privacy';
import TermsofUse from './Components/TermsofUse';


function App() {

 

  return (
    <>
      {/* <Plate/> */}
      <Switch>
          <Route path="/" component={Plate} exact />
          <Route path="/privacy" component={Privacy} />
          <Route path="/termsofuse" component={TermsofUse} />
          <Route component={Error} />
      </Switch>

    </>
  );
}

export default App;
