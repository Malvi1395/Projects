// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email: string;
//   password: string;

//   constructor(private http: HttpClient) {}

//   login(): void {
//     const url = 'http://localhost:9992/student/login'; // Replace with your backend URL
//     const body = { email: this.email, password: this.password };

//     this.http.post(url, body).subscribe(
//       (response) => {
//         // Handle the response from the backend
//         console.log(response);
//       },
//       (error) => {
//         // Handle any errors
//         console.error(error);
//       }
//     );
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

        this.http.post("http://localhost:9992/student/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.status) 
        {
      
           this.router.navigateByUrl('/dashboard');
    

        } 
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }

}