import { CommentsArray } from './CommentsArray'

export interface Dishes {
  id?: number
  name: string
  image: string
  category: string
  label: string
  price: string
  description: string
  //here comments receives as its type the CommentsArray[] interface
  comments: CommentsArray[]
}
