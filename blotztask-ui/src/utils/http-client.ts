import { BadRequestError } from "@/model/error/bad-request-error";
import { ServerError } from "@/model/error/server-error";

export async function fetchWithErrorHandling<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(url, options);

      // If the response is OK, return the parsed JSON
      if (response.ok) {
          return response.headers.get("content-length") !== "0" ? await response.json() : null;
      }

      // Check for JSON content type
      const contentType = response.headers.get('Content-Type');
      
      if (contentType && contentType.includes('application/problem+json')) {
          const json = await response.json();
          // Handle specific status codes
          if (response.status === 400) {
              throw new BadRequestError(json.errors.title || "Bad Request", json.errors || null);
          }
          if (response.status >= 500) {
              throw new ServerError(json.errors.title || "Server Error", json.errors || null);
          }
          // For other errors, throw a generic error with the JSON message
          throw new Error(json.errors.title || 'Uncaught exception');
      }

      throw new Error('Uncaught Error with no Json result');

    } catch (error) {
        // Handle any other errors (like network errors)
        if (error instanceof SyntaxError) {
            console.error(error.message);
        }
        throw error;
    }
  }
  