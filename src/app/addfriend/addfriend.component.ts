import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  constructor() { }
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValue=()=>{
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      " DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
  }




  ngOnInit(): void {
  }

}
