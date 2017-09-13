
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class InterviewServiceProvider {

  constructor (private http: Http, public afd: AngularFireDatabase) {}
  
      getQuestionList(){
        return this.afd.list('question_list')
      }
      getQuestionListVersion(){
        return this.afd.list('question_list/questions/version');
      }
      
      getQuestion() : Observable<any>{
        
         return this.http.get("assets/json/question.json")
     
                         .map((res:Response) => res.json())
                       
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 
     }

     getFile(filePath: string){
            return this.http.get(filePath)
            .map((res:Response) => res.text())
            
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

}
