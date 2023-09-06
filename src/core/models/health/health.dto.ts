export class HealthResponse {
  application: string;
  version: string;
  healthy: boolean;
  latency: string;
  timestamp: Date;
}
