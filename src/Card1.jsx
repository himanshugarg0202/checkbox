import React, { Component } from "react";
import "./App3.css";

 class Card1 extends Component{
     constructor(){
         super();
         this.state = { 
              Portugal:[],
              Nicaragua:[]
         }

         this.handleInputChange = this.handleInputChange.bind(this);
          this.handleInputChange1 = this.handleInputChange1.bind(this);
     }

      handleInputChange(event) {
          const target = event.target;
         var value = target.value;
        
      if(target.checked===true){
          this.state.Portugal[value] = value;   
         }
         else if(target.checked===false){
             this.state.Portugal[value]=null;
         }
             else{
              this.state.Portugal.splice(value, 1);
          }
        
      }

      submit(){
         console.warn(this.state)
       
     }
    
    handleInputChange1(event) {
        const target = event.target;
       var value = target.value;
      
    if(target.checked===true){
        this.state.Nicaragua[value] = value;   
       }
       else if(target.checked===false){
           this.state.Nicaragua[value]=null;
       }
           else{
            this.state.Nicaragua.splice(value, 1);
        }
      
    }


     
      submit1(){
          console.warn(this.state)
      }
   
     
    render(){
        return(
            <>
        <div className="card1">
        
        
                <ul>
                
                    <li>
                    
                    <div className="first">




                     <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
                        
                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Portugal </label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Portugal" id="inlineCheckboxh1" value="Aasiya Jayavant" onChange={this.handleInputChange} onClick={()=>this.submit()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh1">Aasiya Jayavant</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Portugal" id="inlineCheckboxh2" value="Luvleen Lawrence" onChange={this.handleInputChange}  onClick={()=>this.submit()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh2">Luvleen Lawrence</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Portugal" id="inlineCheckboxh3" value="Rey Mibourne" onChange={this.handleInputChange} onClick={()=>this.submit()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh3">Rey Mibourne</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Portugal" id="inlineCheckboxh4" value="Cayla Brister" onChange={this.handleInputChange} onClick={()=>this.submit()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh3">Cayla Brister</label>
                                </div>
                                </div>
                        </div>

                        
                        
                    </div>
                </div>
            </div>




             <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
                        
                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Nicaragua </label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Nicaragua" id="inlineCheckboxh1" value="Deveedaas Nandi" onChange={this.handleInputChange1} onClick={()=>this.submit1()} />
                                    <label className="form-check-label" htmlFor="inlineCheckboxh1">Deveedaas Nandi</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Nicaragua" id="inlineCheckboxh2" value="Obasey Chidy" onChange={this.handleInputChange1} onClick={()=>this.submit1()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh2">Obasey Chidy</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Nicaragua" id="inlineCheckboxh3" value="Xenie Dolezelova" onChange={this.handleInputChange1} onClick={()=>this.submit1()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh3">Xenie Dolezelova</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"  type="checkbox" name="Nicaragua" id="inlineCheckboxh4" value="Ezequiel Dengra" onChange={this.handleInputChange1} onClick={()=>this.submit1()}/>
                                    <label className="form-check-label" htmlFor="inlineCheckboxh3">Ezequiel Dengra</label>
                                </div>
                            </div>
                        </div>                     
                        
                    </div>
                </div>
            </div>  
                                          
                    </div>
                    </li>

                   
                    <li>
                    <div className="first"></div>
                    </li>
                </ul>                     
                   
                </div>
        
            </>
        )
    }   
}
 export default Card1;

