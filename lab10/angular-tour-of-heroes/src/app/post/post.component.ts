import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any[];

  constructor(private http: HttpClient) {
    http.get('https;//jsonplaceholder.typicode.com/posts')
    .subscribe(response =>{
      console.log(response);
    })
   }

  ngOnInit() {
  }

  /*createPost(input: HTMLInputElement){
    //create a post object, with field to create
    let post = {title: input.value};

    this.http.post('http://jsonplaceholder.typicode.com/posts',
      JSON.stringify(post))
      .subscribe(reponse => {
        console.log(reponse.json());
      })
  }

  updatePost(post): void {
    console.log(`update post: ${post.title}`);

    this.http.put("http://jsonplaceholder.typicode.com/posts" + '/' + post.id,
      JSON.stringify(post))
      .subscribe(reponse => {
        console.log(reponse.json());
      })
  }

  deletePost(post): void {
    console.log(`delete post: ${post.title}`);

    this.service.deletePost(post.id)
      .subscribe(response => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index, 1);        
      })
  }*/
}
