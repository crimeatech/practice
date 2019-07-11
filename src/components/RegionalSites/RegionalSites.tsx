import React,{RefObject} from 'react'
import { cn } from '@bem-react/classname';
import "./RegionalSites.scss"
interface AppProps {someMyValue?: boolean}
interface AppState {isOpen?:boolean}
class RegionalSites extends React.Component<AppProps,AppState> {
 toggleContainer : RefObject<any>;
  
 constructor(props: any){
    super(props);
    this.state={isOpen: false }
    this.toggleContainer = React.createRef();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }
    

    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      })); 
    }
  
    onClickOutsideHandler(event:any) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }    
    }
    render() {
      const cnRegionalSitesAndDrop = cn("RegionalSitesAndDrop");
      const cnRegionalSites = cn("RegionalSites");
      return (
        
        <div className={cnRegionalSitesAndDrop()} ref={this.toggleContainer} onClick={this.onClickHandler}>
        <div className={cnRegionalSites({opened: this.state.isOpen})}>
               <a  href="#"className={cnRegionalSites("Selected",{opened: this.state.isOpen})}>Областные сайты</a>
               </div>
               
                <div className={cnRegionalSites("Drop",{opened: this.state.isOpen})} >
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