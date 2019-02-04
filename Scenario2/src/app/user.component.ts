import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';


@Component({
    selector :'user',
    template: `<h2>{{ title }}</h2>`

})



export class UserComponent{

    title = "Komal";
    getUser(){
        return this.title;
    }
}