//importing CommentsArray to insert into Dish interface
import { CommentsArray } from './CommentsArray'

export interface Dish {
  id: number
  name: string
  image: string
  category: string
  label: string
  price: number
  description: string
  //here comments receives as its type the CommentsArray[] interface
  comments: CommentsArray[]
}
