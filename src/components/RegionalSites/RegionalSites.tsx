import React  from 'react'
import "./RegionalSites.scss"
//interface MyComponentState { visible : boolean }
class RegionalSites extends React.Component {
  
    

    render() {
      //this.state.visible;
      
      return (
        <div>
        <div className="RegionalSites">
               <span className="RegionalSites-Selected">Областные сайт</span>
               </div>
                <div className="RegionalSites-Drop" >
                  <ul>
                    <li>
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
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

  