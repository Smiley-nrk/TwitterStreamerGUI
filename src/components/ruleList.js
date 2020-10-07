import React,{ Component } from 'react';

class RuleList extends Component{

  constructor(props: RuleListProps) {
    super(props);
  }

  render() {
    const ruleAvail = this.props.rules != null? (this.props.rules.length != 0? true:false) : false;
    console.log("Rendering RuleList", this.props.rules);
    return (
      <div style={{marginLeft:"8%"}}>
        <h1>Current Filters:</h1>
        <dl style={{maxHeight:"60%",overflowY:"scroll"}}>
          {ruleAvail?
              (this.props.rules.map((rule:Rule) =><li style={{marginTop:"3%"}} key={rule.id}><button style={{marginRight:"5%"}} onClick={e => this.props.removeFunc(rule.id)}>X</button>{rule.value}</li>))
              :('--EMPTY--')}
        </dl>
      </div>
    );
  }
}

export default RuleList;
