import React,{ Component } from 'react';
import '../App.css';
import SplitPane,{ Pane } from 'react-split-pane';
import RuleList from './ruleList.js';
import AddRule from './addRule.js';


interface Rule{
  value: String;
  id: String;
}

class RuleManager extends Component{
  constructor(props: RuleManagerProps) {
    super(props);

    this.state = {
      rules: [],
    };

    this.removeRule = this.removeRule.bind(this);
    this.addRule = this.addRule.bind(this);
  }

  async componentDidMount() {
    await this.updateRuleList();
  }

  async updateRuleList(){
    console.log('Updating RuleList');
    const resp = await fetch('/getFilters').then(response => {return response.json();});
    this.setState({rules: resp.data});
  }

  async removeRule(id:String){
    console.log('Removing Rule:',id);
    const resp = await fetch('/deleteFilter?id='+id).then(resp => {this.updateRuleList();});
  }

  async addRule(tag:String,author:String){
    if(tag == '' && author == ''){
      alert('Please provide at least tag or author');
      return;
    }
    console.log('Adding Rule tag:'+tag+'&Author:'+author);
    const resp = await fetch('/addFilter?tag='+tag+'&author='+author).then(resp => {this.updateRuleList();});
  }

  render() {
    const { rules } = this.state;
    console.log("Rendering RuleManager");
    return (
      <div style={{color : 'white'}}>
        <SplitPane split="horizontal" minSize="50%" resizerStyle={{background:"white"}}>
          <RuleList rules={rules} removeFunc={this.removeRule}/>
          <AddRule addFunc={this.addRule}/>
        </SplitPane>
      </div>
    );
  }
}

export default RuleManager;
