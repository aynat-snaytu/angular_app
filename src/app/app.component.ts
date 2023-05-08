import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
class Item{
    name: string;
    phone: string;
    create_at: string;
    email: string;
    update_at: string;
     
    constructor(name: string, phone: string, create_at: string, email: string, update_at: string) {
  
        this.name = name;
        this.phone = phone;
        this.create_at = create_at;
        this.email = email;
        this.update_at = update_at;
    }
}

@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<div class="page-header">
    <h1> Настройка учетных записей сотрудников контрагента </h1>
</div>
    <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
                    <div class="form-group">
                        <label>Логин</label>
                        <input class="form-control" name="name" formControlName="userName" />
                          
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
                            Не указано имя
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input class="form-control" name="phone" formControlName="userPhone" />
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userPhone'].invalid && myForm.controls['userPhone'].touched">
                            Некорректный номер телефона
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Дата создания</label>
                        <input class="form-control" name="create_at" formControlName="userCreate_at" />
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userCreate_at'].invalid && myForm.controls['userCreate_at'].touched">
                            Некорректная дата
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" formControlName="userEmail" />
                          
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                            Недопустимые символы
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Дата изменения</label>
                        <input class="form-control" name="update_at" formControlName="userUpdate_at" />
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userUpdate_at'].invalid && myForm.controls['userUpdate_at'].touched">
                            Некорректная дата
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default" [disabled]="myForm.invalid">
                            Отправить
                        </button>
                    </div>
                </form>
                
                <div class="panel">
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Логин</th>
                    <th>Телефон</th>
                    <th>Дата создания</th>
                    <th>E-mail</th>
                    <th>Дата изменения</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.create_at}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.update_at}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
   
    myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({
              
            "userName": new FormControl("iivanov", Validators.required),
            "userPhone": new FormControl("", Validators.pattern("[0-9]{11}")),
            "userCreate_at": new FormControl("", Validators.required),
            "userEmail": new FormControl("", [
                Validators.required, 
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") 
            ]),
            "userUpdate_at": new FormControl("", Validators.required)
        });
    }
      
    submit(){
        console.log(this.myForm);
    }

    name: string = "";
    phone: string = "";
    create_at: string = "";
    email: string = "";
    update_at: string = "";
     
    items: Item[] = 
    [
        { name: "iivanov", phone: "79991234567", create_at: "1681721695", email: "asidorov@vtb.ru", update_at: "1681724695" },
        { name: "petrov", phone: "79991234599", create_at: "1681711695", email: "petrov@vtb.ru", update_at: "1681764695" }
    ];
    addItem(name: string, phone: string, create_at: string, email: string, update_at: string): void {
         
        if(name==null || phone==null || create_at==null || email==null || update_at==null)
            return;
        this.items.push(new Item(name, phone, create_at, email, update_at));
    }
}