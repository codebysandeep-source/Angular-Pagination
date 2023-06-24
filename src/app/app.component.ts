import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http'; //for API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(private http : HttpClient){}

  ngOnInit(){
    this.get_data();
  }

  
  // get data (API)
  users : any;
  get_data(){
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res : any)=>{
        console.log(res);
        this.users = res;
      });
  }

  //Pagination 1
  pagination = {
    page : 1,
    count : 0,
    table_size : 5,
    table_sizes : [5,10,15,20]
  }

  onTable_data_change(data : any){
    this.pagination.page = data;
    this.get_data();
  }

  //Pagination 2  
  onTable_size_change(data : any){
    this.pagination.table_size = data.target.value;
    this.pagination.page = 1;
    this.get_data();
  }

  
}
