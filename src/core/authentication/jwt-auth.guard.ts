import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JWT } from "../constants/constants";

@Injectable()
export class JwtAuthGuard extends AuthGuard(JWT) {}
