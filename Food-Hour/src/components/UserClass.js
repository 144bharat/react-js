import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    //to get the props in class we need constructor.
    super(props); // And as we are inside child class(React.component(parent) --> UserClass(child) so this keyword will not be accessible if not used super() constructor inide our constructor.)
    this.state = {
      //This is my state varaiable similar to const [count] = useState(0).
      count: 0,
    };
    console.log(this.props.name + ' child constructor called!');
  }
  render() {
    console.log(this.props.name + ' child render called!');
    return (
      <div className="userCard">
        <p>{this.props.name}</p>
        <h1>Bharat - Software Developer</h1>
        <h3>Location - Delhi</h3>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            //NOTE: XX NEVER UPDATE STATE VARIABLE LIKE BELOW IN CLASS BASED COMPONENT:
            //this.state.count = this.state.count + 1
            this.setState({
              //This setState() function takes state variable object: which is responsible for update in state.
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }

  componentDidMount() {
    //All Api calls must be here why:
    //because after constructor called and render rendered the ui got appeared then it is a right time to call api and get the data.
    console.log(this.props.name + ' child component did mount called');
  }
}
export default UserClass;

/*
Class Based Component Life Cycle:

1. constructor is called
2. render is called

ABOVE 2 STEPS ARE THE RENDER PHASE OF REACT

3. ui updated
4. componentDidMount called

ABOVE 2 STEPS ARE THE COMMIT PHASE OF REACT

For 1 Parent -> Two Child of Same Component:

1. Parent Constructor Called
2. Parent Render Called

3. Child1 Constructor Called
4. Child1 Render Called

5. Child2 Constructor Called
6. Child2 Render Called

7. Child1 ComponentDidMount Called
8. Child2 ComponentDidMount Called
7. Parent ComponentDidMount Called
*/
