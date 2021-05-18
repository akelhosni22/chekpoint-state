import React from 'react'
import './App.css'

class App extends React.Component{

  constructor (props){

    super(props);
      this.state={
      fullname: <h1>Hosni akel</h1>,
      bio:<p>fullstack Js developer  with 2 years of experience in Javascript,react, mongo D8, etc. Received best Award and Best StudentTeam while working at Go my Code. "</p>,
      profession:<h2>FullStack JavaScript Developer </h2>,
      visible: false ,
      intervall: null ,
      timer: 0 ,
      };
    }
  componentDidMount(){

    this.setState({
      intervall : setInterval(() => {
        this.setState({timer: this.state.timer + 1 }) ;

      }, 1000) ,
    });

  }
  componentDidUpdate(){
    console.log("componentDidUpdate()") ;

  }
  componentWillUnmount(){

    clearInterval(this.state.timer);

  }
  togglevisiblity = () => {
    this.setState({
      visible : !this.state.visible,
    })
  }



  render(){

    return(
      <div>
        <div className="para">
          <h3> click ON to get more informations</h3>
        </div>
          {this.state.visible && (
            <div>
                <div>
                  <img src='/akel.jpg'></img>
                </div>
              {this.state.fullname}
              {this.state.bio}
              {this.state.profession}
              <h2>{this.state.timer}</h2>
            </div>
          )
          }

          <br />
          <br />
            <button onClick={this.togglevisiblity}>
          {this.state.visible ? "OFF" : "ON"} 
        </button>
      </div>
    )

  }
}
export default App ;