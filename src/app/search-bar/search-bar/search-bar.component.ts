import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  value: any;
  constructor() { }
  searchText=new FormControl();
  ngOnInit(): void {
    this.searchText.valueChanges.pipe(debounceTime(300)).subscribe(val=>{
      if(val.length>2 && val){
        this.value=val;
      }
      if(val==""){
        this.value="clear";
      }
    })
  }

  searchOnBtnClick(){
    this.value=this.searchText.value;

  }

}
