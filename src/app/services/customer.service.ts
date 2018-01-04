import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers(): Observable<any>{
      return this._http.get('http://127.0.0.1:8000/api/customers')
      .map(
        (response: Response) => {
          return response.json().customers;
        }
      );
    }

    addCustomer(customer){
    
      const body = JSON.stringify({customer: customer});
      console.log(body);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this._http.post('http://127.0.0.1:8000/api/customer', body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );


    }

    
    getCustomerById(id: number): Observable<any>{
      return this._http.get('http://127.0.0.1:8000/api/customers/'+ id)
      .map(
        (response: Response) => {
          return response.json().customer;
        }
      );
    }

    deleteCustomer(id: number){
      return this._http.delete('http://127.0.0.1:8000/api/customer/'+ id)
      .map((response:Response) =>  response.json());
    }

}
