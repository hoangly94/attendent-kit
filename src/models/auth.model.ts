export interface LoginValues {
  email: string
  password: string
  isRemembered?: boolean
}

export interface LoginRequest {
  email: string
  password: string
}

export interface AccountRegistrationValues {
  companyName: string
  fullname: string
  email: string
}

export interface AccountRegistrationRequest {
  companyName: string
  fullname: string
  email: string
}

export interface AccountValidationValues {
  password: string
}

export interface AccountValidationRequest {
  password: string
}

export interface SiteCreationValues {
  industry: string
  name: string
  location: string
}

export interface SiteCreationRequest {
  application: string
  address: string
  name: string
}

export interface SiteLocationResponse {
  address: string
}

export type GetIndustriesResponse = {
  id: string
  name: string
}[]

export type GetSitesResponse = {
  id: string
  name: string
}[]

