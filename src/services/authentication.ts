/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@/config/infra/http"
export class Authentication {

  async requestEmail(email: string): Promise<any> {
    try {
      const response = await http.post('/auth/request-email', { email });
      return response;
    } catch (e) {
      return e
    }

  }
  async requestPassword(token: string, email: string, password: string): Promise<any> {
    try {
      const response = await http.post(`/auth/request-password?token=${token}`, { email, password })
      return response
    } catch (e) {
      return e
    }


  }
}


export const authService = new Authentication()
