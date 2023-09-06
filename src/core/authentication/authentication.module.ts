import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { SECRET_KEY } from "../constants/environment";
import { AuthenticationService } from "./authentication.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    JwtModule.register({
      secret: SECRET_KEY,
    }),
  ],
  providers: [AuthenticationService, JwtStrategy],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
