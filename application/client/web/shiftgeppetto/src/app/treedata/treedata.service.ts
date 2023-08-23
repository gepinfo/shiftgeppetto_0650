import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class TreedataService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpGetAllTree(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/treeentity/get/tree' + `?jwt_token=${jwt_token}`);
    }
}