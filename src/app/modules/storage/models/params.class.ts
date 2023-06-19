export class ParamsModel {
  constructor(
    public filter: string | null,
    public minValue: string | null,
    public maxValue: string | null
  ) {}
}