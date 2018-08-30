import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false ;
serverCreationStatus = ' no server was  created ' ;
serverName = 'TestServer' ;
  constructor() {
    setTimeout(()=>{
    this.allowNewServer = true
   },2000 );}

  ngOnInit() {
  }
  onUpdateServerName(  event :Event ){
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName  = (<HTMLInputElement>event.target).value ;
  }
onCreateServer(){
  this.serverCreationStatus = 'server was  created ' + this.serverName
}

}
