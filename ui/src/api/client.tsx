import { Client } from "types/client";
import { ApiResponse } from "types/api";
import { handleResponse } from "util/api";

export const fetchClients = (): Promise<Client[]> => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_URL}/clients`)
      .then(handleResponse)
      .then((result: ApiResponse<Client[]>) => resolve(result.data))
      .catch(reject);
  });
};

export const fetchClient = (clientId: string): Promise<Client> => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_URL}/clients/${clientId}`)
      .then(handleResponse)
      .then((result: ApiResponse<Client>) => resolve(result.data))
      .catch(reject);
  });
};

export const createClient = (values: string): Promise<Client> => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_URL}/clients`, {
      method: "POST",
      body: values,
    })
      .then(handleResponse)
      .then((result: ApiResponse<Client>) => resolve(result.data))
      .catch(reject);
  });
};

export const updateClient = (
  clientId: string,
  values: string
): Promise<Client> => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_URL}/clients/${clientId}`, {
      method: "PUT",
      body: values,
    })
      .then(handleResponse)
      .then((result: ApiResponse<Client>) => resolve(result.data))
      .catch(reject);
  });
};

export const deleteClient = (client: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_URL}/clients/${client}`, {
      method: "DELETE",
    })
      .then(resolve)
      .catch(reject);
  });
};
