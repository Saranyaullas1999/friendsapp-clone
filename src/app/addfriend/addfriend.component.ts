import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValue=()=>{
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
    
    this.myapi.friendView(data).subscribe(
      (res)=>{
        console.log(res)
        alert("Successfully added")
        this.name=""
    this.friendName=""
    this.friendNickName=""
    this.DescribeYourFriend=""
      }
      
    )
    
  }




  ngOnInit(): void {
  }

}
