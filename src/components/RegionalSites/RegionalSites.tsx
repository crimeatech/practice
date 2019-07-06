import React  from 'react'
import "./RegionalSites.scss"
//interface MyComponentState { visible : boolean }
interface AppProps {someMyValue?: boolean}
interface AppState {class?: string}
class RegionalSites extends React.Component<AppProps,AppState> {
  constructor(props: any){
    super(props);
    this.state={class: "RegionalSites-Drop"};
    this.show = this.show.bind(this);
  }
    show(){
     let className = (this.state.class==="RegionalSites-Drop")?"RegionalSites-Drop-Show":"RegionalSites-Drop";
      this.setState({class: className});
    
    }

    render() {
      //this.state.visible;
      
      return (
        
        <div className="RegionalSitesAndDrop">
        <div className="RegionalSites">
               <a href="#" className="RegionalSites-Selected" onClick={this.show}>Областные сайты</a>
               </div>
                <div className={this.state.class} ><ul>
                    <li>
                      <a href="#">fbdsiufbdsifbdsibfds</a>
                      <a href="#">dfgfdgdfgdfg</a>
                      <a href="#">sdvnilvnsdlivnbvldsivbsdliv</a>
                    </li>
                  </ul>
                </div>
        </div>
      );
      
    }
    /*DropMenu() {
      this.setState(function (prevState) {
        return {
         
        };
      });
    }*/
   }
   
export default RegionalSites;

