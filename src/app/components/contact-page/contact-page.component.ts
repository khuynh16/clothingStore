import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      'email': new FormControl(null, Validators.email),
      'firstName': new FormControl(null, Validators.minLength(1)),
      'lastName': new FormControl(null, Validators.minLength(1)),
      'query': new FormControl(null, Validators.minLength(1))
    });
  }

  onSubmit(form: FormGroup, formDirective: FormGroupDirective) {
    if (form.valid) {
      // modal to display email sent and received
      const dialogRef = this.dialog.open(EmailSentConfirmationModal, {
        width: '600px',
        data: {
          firstName: form.get('firstName').value,
          lastName: form.get('lastName').value
        }
      });
      // formDirective in html in ts needed so that it returns input to "untouched"
      // when form.reset is called on the form after contact form filled and submitted
      formDirective.resetForm();
      this.form.reset();
    }
  }
}

// component for 'confirmation of user email sent' modal
@Component({
  selector: 'app-email-sent-confirmation-modal',
  templateUrl: './email-sent-confirmation-modal.html',
  styleUrls: ['./email-sent-confirmation-modal.css']
})
export class EmailSentConfirmationModal {

  constructor(
    public dialogRef: MatDialogRef<EmailSentConfirmationModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}


