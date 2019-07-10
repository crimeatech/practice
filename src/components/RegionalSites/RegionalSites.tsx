import React from 'react'
//import ReactDOM from 'react-dom'
import "./RegionalSites.scss"

//interface MyComponentState { visible : boolean }
interface AppProps {someMyValue?: boolean}
interface AppState {class?: string, isOpen?:boolean}
class RegionalSites extends React.Component<AppProps,AppState> {
 // toggleContainer :RefObject<HTMLDivElement>;
  constructor(props: any){
    super(props);
    this.state={class: "RegionalSites-Drop",
     isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(e:any){
     var className = (this.state.class==="RegionalSites-Drop")?"RegionalSites-Drop-Show":"RegionalSites-Drop";
      this.setState({class: className});
      if(this.state.isOpen===false){
        this.setState({isOpen:true});
       
      }
    else this.setState({isOpen: false})

    }

    render() {
      
      return (
        
        <div className="RegionalSitesAndDrop">
        <div className="RegionalSites" >
               <a  href="#"className="RegionalSites-Selected" onClick={this.handleClick}>Областные сайты</a>
               </div>
               
                <div className={this.state.class} >
                 <ul>
                    <li>
                      <a href={"href"}>Портал Правительства Республики Крым</a>
                    </li>
                  </ul>
                </div>
         
        </div>
      );
      
    }
 
   }
   
   export default RegionalSites;