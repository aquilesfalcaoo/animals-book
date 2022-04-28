import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { CommentsService } from 'src/app/core/services/comments/comments.service';
import { Comments } from 'src/app/shared/interface/comments/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.searchComment(this.id);
    this.commentForm = this.form.group({
      comment: [null, Validators.maxLength(300)],
    });
  }

  recording(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService.includeComment(this.id, comment).pipe(
      switchMap(() => this.commentsService.searchComment(this.id)),
      tap(() => {
        this.commentForm.reset();
      })
    );
  }
}
