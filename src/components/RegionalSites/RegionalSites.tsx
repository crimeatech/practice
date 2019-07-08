import React, { createRef, RefObject }  from 'react'
import ReactDOM from 'react-dom'
import "./RegionalSites.scss"

//interface MyComponentState { visible : boolean }
interface AppProps {someMyValue?: boolean}
interface AppState {class?: string, isOpen?:boolean}
class RegionalSites extends React.Component<AppProps,AppState,any> {
 // toggleContainer :RefObject<HTMLDivElement>;
  constructor(props: any){
    super(props);
    this.state={class: "RegionalSites-Drop",
     isOpen: false };
    this.show = this.show.bind(this);
    //this.toggleContainer=React.createRef();

  }




    show(){
     var className = (this.state.class==="RegionalSites-Drop")?"RegionalSites-Drop-Show":"RegionalSites-Drop";
      this.setState({class: className});
      
    
    }

  
    render() {
      //this.state.visible;
      
      return (
        
        <div className="RegionalSitesAndDrop">
        <div className="RegionalSites" >
               <a href="#" className="RegionalSites-Selected" onClick={this.show}>Областные сайты</a>
               </div>
               
                <div className={this.state.class} >
                 <ul>
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
 
   }
   
   export default RegionalSites;