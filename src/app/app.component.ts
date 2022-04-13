import { Component } from '@angular/core';
import { sample, sampleTime } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  result:number = 0;
  resultStatus :boolean = false;
  sampleAnswer = '';
  testAnswer = '';

  payload : object = { 'sample' :'', 'test' : ''};

  setSample( vari : any ){
    this.sampleAnswer = vari.target.value;
    // console.log( this.sampleAnswer )
  }
  setTest(vari : any ){
    this.testAnswer = vari.target.value;
    // console.log( this.testAnswer );
  }


  onClickCond(  ){
    if( this.sampleAnswer == '' ) alert('Please enter sample Answer !');
    else{
      this.payload = { 'sample': this.sampleAnswer, 'test': this.testAnswer };

      axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post( 'https://fierce-mountain-53124.herokuapp.com/', this.payload )
      .then( response => {
          console.log(response) 
          this.resultStatus = true
          this.result = response['data'] * 100
          
        })
      .catch(error => {
          // element.parentElement.innerHTML = `Error: ${error.message}`;
          console.error('There was an error!', error);
      });
      console.log( this.payload );
    }
  }
}
