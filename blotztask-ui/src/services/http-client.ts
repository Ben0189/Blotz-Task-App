import { BadRequestError } from "@/model/error/bad-request-error";
import { ServerError } from "@/model/error/server-error";
import { UnhandledError } from "@/model/error/unhandle-error";

export async function fetchWithErrorHandling<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      if (response.ok) {
        return result as T;
      }
  
      if (response.status === 400) {
        throw new BadRequestError(result.title || "Bad Request", result.errors || null);
      }

      if (response.status >= 500) {
        throw new ServerError(result.title || "Bad Request", result.errors || null);
      }
  
      throw new Error(result.title || "An error occurred", result.errors);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new UnhandledError("Failed to parse JSON response");
      }
      throw error;
    }
  }
  