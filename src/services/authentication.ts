/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@/config/infra/http"
export class Authentication {

  async requestEmail(email: string): Promise<any> {
    console.log({ email })
    const response = await http.post('/auth/request-email', { email });
    return response;
  }
  async requestPassword(token: string, email: string, password: string): Promise<any> {
    const response = await http.post(`/auth/request-password?token=${token}`, { email, password })
    return response
  }
}


export const authService = new Authentication()
