import { BadRequestError } from "@/model/error/bad-request-error";
import { ServerError } from "@/model/error/server-error";

export async function fetchWithErrorHandling<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(url, options);
      const result = response.headers.get("content-length") !== "0" ? await response.json() : null;
  
      if (response.ok) {
        return result;
      }
  
      if (response.status === 400) {
        throw new BadRequestError(result.errors.title || "Bad Request", result.errors || null);
      }

      if (response.status >= 500) {
        throw new ServerError(result.errors.title || "Bad Request", result.errors || null);
      }
  
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error(error.message)
      }
      throw error;
    }
  }
  