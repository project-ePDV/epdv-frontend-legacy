export class FilterModel {
  constructor(
    public filter: string,
    public minValue: string,
    public maxValue: string | null
  ){}
}