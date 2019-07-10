import React,{RefObject} from 'react'
import "./RegionalSites.scss"


//interface MyComponentState { visible : boolean }
interface AppProps {someMyValue?: boolean}
interface AppState {class?: string,classClicked:string, isOpen?:boolean}
class RegionalSites extends React.Component<AppProps,AppState> {
 toggleContainer : RefObject<any>;
  
 constructor(props: any){
    super(props);
    this.state={class: "RegionalSites-Drop",
    classClicked: "RegionalSites-Selected" ,
     isOpen: false }
    
     this.hide = this.hide.bind(this);
     this.change = this.change.bind(this);
     this.SelectedClick = this.SelectedClick.bind(this);
    this.toggleContainer = React.createRef();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }
    hide(){
     
     if(this.state.class==="RegionalSites-Drop-Show")
     { this.setState({class: "RegionalSites-Drop"});
    
    }

    }
    change(){
      var className = (this.state.class==="RegionalSites-Drop")?"RegionalSites-Drop-Show":"RegionalSites-Drop";
       this.setState({class: className});
       var classNameSelected = (this.state.classClicked==="RegionalSites-Selected")?"RegionalSites-Selected-Clicked":"RegionalSites-Selected";
       this.setState({classClicked: classNameSelected});
 
     }
   
     SelectedClick(){
       if(this.state.isOpen===true){
         this.setState({classClicked: "RegionalSites-Selected-Clicked"})
       } else this.setState({classClicked: "RegionalSites-Selected"})
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
      this.change();
      
    }
  
    onClickOutsideHandler(event:any) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
        this.hide();
      }
      
    }

   

    render() {
      
      return (
        
        <div className="RegionalSitesAndDrop" ref={this.toggleContainer} onClick={this.onClickHandler}>
        <div className="RegionalSites" >
               <a  href="#"className={this.state.classClicked}  >Областные сайты</a>{}
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