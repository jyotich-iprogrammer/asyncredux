import React,{Component} from 'react';
import Countercontrol from '../../components/CounterControl/Countercontrol'
import Counteroutput from  '../../components/CounterOutput/Counteroutput';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/counter';


class Counter extends Component{
    state={
        counter:0
    }

CounterChangedHandler=(action,value)=>{
     switch(action){
         case 'inc':
             this.setState((prevState)=>{return{counter:prevState.counter + 1}})
             break;
             case 'des':
                this.setState((prevState)=>{return{counter:prevState.counter - 1}})
                break;
                case 'add':
                    this.setState((prevState)=>{return{counter:prevState.counter +value}})
                    break;
                    case 'sub':
                        this.setState((prevState)=>{return{counter:prevState.counter + value}})
                        break;

     }
}

    render(){
        return(
            <div>
            {/*<Counteroutput value={this.state.counter}/>*/}
            <Counteroutput value={this.props.ctr}/>
            {/*<Countercontrol label="Increment" clicked={()=>this.CounterChangedHandler('inc')}/>*/}
            <Countercontrol label="Increment" clicked={this.props.onIncrementCounter}/>
            <Countercontrol label="Decrement" clicked={this.props.onDecrementCounter}/>
            <Countercontrol label="Add 10" clicked={this.props.onAddition}/>
            <Countercontrol label="Sub 15" clicked={this.props.onSubstract}/>
            <hr />

            <button onClick={this.props.onStoreResult}>store result</button>

            <ul>
                {this.props.storedResults.map(strResult=>(
 <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                ))}
               
            </ul>
            </div>

        );
    }
}


const mapStateToProps=state=>{
 return{
     ctr:state.counter,
     storedResults:state.results
 };
};

const mapDispatchToProps=dispatch=>{
    return{
          onIncrementCounter:()=>dispatch(actionCreators.increment()),
          onDecrementCounter:()=>dispatch(actionCreators.decrement()),
          onAddition:()=>dispatch(actionCreators.addition(10)),
          onSubstract:()=>dispatch(actionCreators.substract(15)),
          onStoreResult:(result)=>dispatch(actionCreators.storeResult(result)),
          onDeleteResult:(id)=>dispatch(actionCreators.deleteResult(id))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);