import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

    taskFormHTML: FormGroup = new FormGroup({});

    constructor() { }



    arrayTaskForm: Array< { title:string, description:string , status:string } > = [
        /* {
            title: 'JavaScript',
            description: '',
            status: 'Completado'
        },
        {
            title: 'Node JS',
            description: '',
            status: 'Completado'
        },
        {
            title: 'TypeScript',
            description: '',
            status: 'Completado'
        } */
    ]

    ngOnInit(): void {
        this.taskFormHTML = new FormGroup(
            {
                title: new FormControl('', Validators.required ),
                descripcion: new FormControl('', Validators.required ),
                status: new FormControl('Pendiente')
            }
        )
    }

    sendInfoTask():void {
        const body = this.taskFormHTML.value;
        this.arrayTaskForm.push(body);
    }

}