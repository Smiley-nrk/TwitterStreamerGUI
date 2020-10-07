import React,{ Component } from 'react';

class AddRule extends Component{

  constructor(props) {
       super(props)

       this.onChangeAuthor = this.onChangeAuthor.bind(this);
       this.onChangeTag = this.onChangeTag.bind(this);

       this.state = {
           author: '',
           tag: ''
       }
   }

   onChangeAuthor(e){
     this.setState({author: e.target.value});
   }

   onChangeTag(e){
     this.setState({tag: e.target.value});
   }

  render(){
    return (
      <div style={{marginLeft:"8%"}}>
        <h1>Add Filter:</h1>
          <table>
            <tbody>
            <tr>
              <td>Author:</td>
              <td><input type="text" id="author" name="author" value={this.state.author} onChange={this.onChangeAuthor}/></td>
            </tr>
            <tr>
              <td>Tags:</td>
              <td><input type="text" id="tag" name="tag" value={this.state.tag} onChange={this.onChangeTag}/></td>
            </tr>
            <tr>
              <td></td>
              <td><button onClick={e => this.props.addFunc(this.state.tag,this.state.author)}>Add Filter</button></td>
            </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

export default AddRule;
