import React, {Component} from 'react';
import hulk from '../images/hulk.jpg';

export default class Voting extends Component{

    constructor(props){
        super(props)
        state={
            presidentialApirants:[],
            vicePresidentialAspirants:[]
        }
    }

    renderDetails = ()=>{
        const details = [
            {name:'PK',id:1},
            {name:'Kwame', id:2},
            {name:'Abena',  id:3},
        ]
        return(
            details.map((item)=>{
                return(
                    <div key={item.id}>
                        <img src ={hulk} alt='Hulk' style={{width:150, height:200}}/>
                        {item.name}
                        <input type='radio' name='picture'/>
                    </div>
                )
            })
        )
    
    }
    
   render(){
    const  position = ['President', 'Vice President'];
       return(
           <div>
               <div id='president'>
                <label>Position:{position[0]}</label>
                <div>
                    <form>
                    <this.renderDetails/>
                    </form>
                </div>
               </div>
               <div id='vice_president'>
                <label>Position:{position[1]}</label>
                <div>
                    <form>
                    <this.renderDetails/>
                    </form>
                </div>
               </div>
           </div>
       )
   }
}