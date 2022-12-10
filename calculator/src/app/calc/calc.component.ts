import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { iif } from 'rxjs';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit{
  currEquation:string='';
  operators = ['=', '+', '-', '\/', '*']
  result:number=0;
  tiles  =[
    //1st row
    {text:'clear', bgColor:'green',colSpan:2, rowSpan:1, type:'clear', value:'clear'},
    {text:'delete', colSpan:1, bgColor:'green', rowSpan:1, type:'delete', value:'delete'},
    {text:'/', colSpan:1,bgColor:'orange', rowSpan:1, type:'operator', value:'/'},

    //2nd row
    {text: '1', colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:1}, 
    {text: '2', colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:2}, 
    {text: '3', colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:3},
    {text:'*', colSpan:1,bgColor:'orange', rowSpan:1, type: 'operator', value:'*'},

    //3rd row
    {text: '4', colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:4},
    {text: '5', colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:5},
    {text:'6',  colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:6},
    {text: '+', colSpan:1,bgColor:'orange', rowSpan:1, type:'operator', value:'+'},

    //4th row
    {text:'7',  colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:7},
    {text:'8',  colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:8},
    {text:'9',  colSpan:1, bgColor:'gray', rowSpan:1,type:'digit', value:9},
    {text: '-', colSpan:1,bgColor:'orange',rowSpan:1, type:'operator', value:'-'},
    
    //5th row
    {text:'.', colSpan:1, rowSpan:1, bgColor:'gray', type:'decimal', value:'.'},
    {text:'0', colSpan:1,rowSpan:1, bgColor:'gray', type:'digit', value:0},
    {text:'=', colSpan:2,bgColor:'orange', rowSpan:1, type: 'operator', value:'='},

    
   
   


  ]

  constructor() {}
  handleDigitClick(item:any){
    //updating equation and getting recent operator
    let mostRecentOperator = this.currEquation.charAt(this.currEquation.length-1) 
    
    this.currEquation+=item.text

    

  } 
  isOperator(character:string) {
    if(this.operators.indexOf(character)!== -1){
        return true

    } 
    return false;

  }
  calculate(){
    let splitEquation = []
    if(this.currEquation !== ''){ // if its first button pressed
       splitEquation=this.currEquation.split('')
       for(let i=0; i< splitEquation.length; i++){
          if(i===0 && !Number.isNaN(splitEquation[i])) {
            this.result += Number(splitEquation[i])
          }
          if(splitEquation[i]==='+'){
            this.result+=Number(splitEquation[i+1])
          }  
          if(splitEquation[i]==='-') {
            this.result-=Number(splitEquation[i+1])
          }  
          if(splitEquation[i]==='/') {
            this.result/=Number(splitEquation[i+1])
          }
          if(splitEquation[i]==='*') {
            this.result*=Number(splitEquation[i+1])
          }    
       }
    }

    


  }
 
   handleClick(item:any){
    switch (item.value){
      case '=': {
        this.calculate()
        break;
      } 
      case 'clear':{
        this.currEquation='';
        this.result = 0;
        break;

      }
      case 'delete':{
        this.currEquation = this.currEquation.substring(0, this.currEquation.length-1)
        break;
      }

      default:{
        if(this.currEquation.length===0 && this.operators.includes(item.value)){
          break;
        } else {
          this.currEquation+=item.value
          break;
        }
        
      }
    }
  

  }
  
  ngOnInit(): void {
    
  }
}
