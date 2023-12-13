export interface Users {
    id: string
    firstName: string
    lastName: string
    emailAddress: string
    zipCode: string
    address1: string
    address2: string
    city: string
    state: string
    imageUrl: string
    language: string
    token: string
    message: Message
  }
  export interface Message {
    code: number
    description: string
  }