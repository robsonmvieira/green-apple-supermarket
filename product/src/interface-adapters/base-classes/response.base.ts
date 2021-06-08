export interface ResponseBaseProps {
  id?: string
  createdAt: string
  updatedAt: string
}
export class ResponseBase {
  id?: string
  createdAt: string
  updatedAt: string
  constructor(props: ResponseBaseProps) {
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.id = props.id ? props.id : undefined
  }
}
