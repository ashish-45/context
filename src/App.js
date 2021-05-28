import React,{Fragment} from 'react';
import Provider from './provider';
import Context from './context';

const Agents = () =>{
  return(
    <div>
      <AgentOne />
    </div>
  )
}

const AgentOne = () =>{
  return(
    <div>
      <AgentTwo />
    </div>
  )
}

const AgentTwo = () =>{
  return(
    <div>
      <AgentBond />
    </div>
  )
}

const AgentBond = () =>{
  return(
    <div>
      <Context.Consumer>
        {
          (context) => (
            <Fragment>
              <h3>Agent Information: </h3>
          <p> Mission Name : {context.data.mname}</p>
          <h2> Mission Status:{context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Choose to accept</button>
            </Fragment>
          )
        }
      </Context.Consumer>
    </div>
  )
}

const App = () =>{
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}
export default App;