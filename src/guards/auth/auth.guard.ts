import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const  request = context.switchToHttp().getRequest();
    console.log("request : ",request);
    const authHeader = request.headers['authorization'];
    console.log("authHeaders : ",request.headers);

    console.log(authHeader === "Bearer superSecretToken");
    return authHeader === "Bearer superSecretToken";
  }
}
