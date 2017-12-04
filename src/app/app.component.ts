import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './animate.css' ]
})
export class AppComponent {
  title = 'app';

   infohtml(){
    document.getElementById("infocss").style.display = "none";
    document.getElementById("infosass").style.display = "none";
    document.getElementById("infojs").style.display = "none";
    document.getElementById("infojquery").style.display = "none";
    document.getElementById("infoangular").style.display = "none";
    document.getElementById("infoionic").style.display = "none";
    document.getElementById("infohtml").style.display = "block";
  }
  infocss(){
    document.getElementById("infohtml").style.display = "none";
    document.getElementById("infosass").style.display = "none";
    document.getElementById("infojs").style.display = "none";
    document.getElementById("infojquery").style.display = "none";
    document.getElementById("infoangular").style.display = "none";
    document.getElementById("infoionic").style.display = "none";
    document.getElementById("infocss").style.display = "block";
  }
  infosass(){
    document.getElementById("infohtml").style.display = "none";
    document.getElementById("infocss").style.display = "none";
    document.getElementById("infojs").style.display = "none";
    document.getElementById("infojquery").style.display = "none";
    document.getElementById("infoangular").style.display = "none";
    document.getElementById("infoionic").style.display = "none";
    document.getElementById("infosass").style.display = "block";
  }
  infojs(){
    document.getElementById("infohtml").style.display = "none";
    document.getElementById("infosass").style.display = "none";
    document.getElementById("infocss").style.display = "none";
    document.getElementById("infojquery").style.display = "none";
    document.getElementById("infoangular").style.display = "none";
    document.getElementById("infoionic").style.display = "none";
    document.getElementById("infojs").style.display = "block";
  }
  infojquery(){
    document.getElementById("infohtml").style.display = "none";
    document.getElementById("infosass").style.display = "none";
    document.getElementById("infojs").style.display = "none";
    document.getElementById("infocss").style.display = "none";
    document.getElementById("infoangular").style.display = "none";
    document.getElementById("infoionic").style.display = "none";
    document.getElementById("infojquery").style.display = "block";
  }
  infoangular(){
    document.getElementById("infohtml").style.display = "none";
    document.getElementById("infosass").style.display = "none";
    document.getElementById("infojs").style.display = "none";
    document.getElementById("infojquery").style.display = "none";
    document.getElementById("infocss").style.display = "none";
    document.getElementById("infoionic").style.display = "none";
    document.getElementById("infoangular").style.display = "block";
  }
  infoionic(){
    document.getElementById("infohtml").style.display = "none";
    document.getElementById("infosass").style.display = "none";
    document.getElementById("infojs").style.display = "none";
    document.getElementById("infojquery").style.display = "none";
    document.getElementById("infoangular").style.display = "none";
    document.getElementById("infocss").style.display = "none";
    document.getElementById("infoionic").style.display = "block";
  }

  showOne(){
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("page").style.display = "none";
  }
  showTwo(){
  document.getElementById("two").style.display = "block";
  document.getElementById("one").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("page").style.display = "none";
  }
  showThree(){
  document.getElementById("three").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("one").style.display = "none";
  document.getElementById("fourth").style.display = "none";
  document.getElementById("page").style.display = "none";
  }
  showFourth(){
  document.getElementById("fourth").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("one").style.display = "none";
  document.getElementById("page").style.display = "none";
  }

  showjapan(){
    console.log('test');
    document.getElementById("infocine").style.display = "none";
    document.getElementById("infomusic").style.display = "none";
    document.getElementById("infogame").style.display = "none";
    document.getElementById("infojapan").style.display = "block";
  }

  showmusic(){
    document.getElementById("infocine").style.display = "none";
    document.getElementById("infojapan").style.display = "none";
    document.getElementById("infogame").style.display = "none";
    document.getElementById("infomusic").style.display = "block";
  }

  showcine(){
    document.getElementById("infojapan").style.display = "none";
    document.getElementById("infomusic").style.display = "none";
    document.getElementById("infogame").style.display = "none";
    document.getElementById("infocine").style.display = "block";
  }

  showgame(){
    document.getElementById("infocine").style.display = "none";
    document.getElementById("infomusic").style.display = "none";
    document.getElementById("infojapan").style.display = "none";
    document.getElementById("infogame").style.display = "block";
  }
  

}
