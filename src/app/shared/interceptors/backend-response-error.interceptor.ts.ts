import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class BackendResponseErrorInterceptor implements HttpInterceptor {

	constructor(private messageService: MessageService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((httpError: HttpErrorResponse) => {
          let errorMsg = '';
          if (httpError.error instanceof ErrorEvent) {
              console.error('This is client side error', httpError);
              errorMsg = `Error: ${httpError.error.message}`;
          } else if (httpError.status === 0) {
              console.error("Can't connect with server", httpError);
              errorMsg = `Error Code: ${httpError.status},  Message: ${httpError.error.message}`;
              this.showBackendConnectionErrorMessage();
          } else {
            console.error('This is server side error', httpError);
            errorMsg = `Error Code: ${httpError.status},  Message: ${httpError.error.message}`;

            if (httpError.error.errors) {
              const attributeErrors = httpError.error.errors;
              const errors: string[] = [];

              for (const attribute in attributeErrors) {
                attributeErrors[attribute].forEach((error: string) => {
                  errors.push(error)
                });
              }

              errors.forEach(error => this.showBackendErrorMessage(error));
            } else {
              this.showBackendErrorMessage(httpError.error.message);
            }
          }
          console.error(errorMsg);

          return throwError(() => errorMsg);
      })
    );
  }

	showBackendErrorMessage(error: string): void {
		this.messageService.add({
			life: 5000,
			severity: 'error',
			summary: "Mensagem retornada pelo servidor:",
			detail: error
		});
	}

	showBackendConnectionErrorMessage(): void {
		this.messageService.add({
			life: 5000,
			severity: 'error',
			summary: "Erro de conexão com o servidor!",
			detail: `Verifique a sua conexão e tente novamente. Caso o problema
					 persista, contate o suporte.`
		});
	}
}
