import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdeltreeService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(treeentity:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/treeentity' + `?jwt_token=${jwt_token}`, treeentity);
    }
    GpDelete(treeentityId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.WEB_API + '/treeentity/' + treeentityId + `?jwt_token=${jwt_token}`);
    }
    GpGetEntityById(treeentityId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/treeentity/' + treeentityId + `?jwt_token=${jwt_token}`);
    }
}