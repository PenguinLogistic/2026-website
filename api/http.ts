type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

async function request<T>(
  method: HttpMethod,
  url: string,
  body?: unknown
): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`${method} ${url} failed (${res.status}): ${text}`);
  }

  if (!text) {
    throw new Error(`Empty response from ${method} ${url}`);
  }

  return JSON.parse(text) as Promise<T>;
}

export const get = <T>(url: string) => request<T>("GET", url);
export const post = <T, B>(url: string, body: B) =>
  request<T>("POST", url, body);
export const put = <T, B>(url: string, body: B) => request<T>("PUT", url, body);
export const del = <T>(url: string) => request<T>("DELETE", url);
