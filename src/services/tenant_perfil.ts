/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@/config/infra/http";

export class TenantInfos {

  async getTennantInfo(): Promise<any> {
    const response = await http.get('/info-company')
    return response
  }
}

export const tenantInfos = new TenantInfos()
