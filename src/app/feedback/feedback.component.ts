import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FeedBackFormServiceService} from '../services/feed-back-form-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder,private fbservice:FeedBackFormServiceService) {
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }

  onSubmit() {
    // Process the form data here
    console.log(this.feedbackForm.value);
    this.fbservice.submitFeedback(this.feedbackForm.value).subscribe(
      (response) => {
        alert('Submission successful:'+ response);
        this.feedbackForm.reset();
        // Handle successful submission, e.g., show a success message
      },
      (error) => {
        alert('Error submitting feedback:'+ error);
        // Handle error, e.g., show an error message
      }
    );
    // You can send the form data to your backend or perform other actions
  }
  

  ngOnInit() {
  }

}
