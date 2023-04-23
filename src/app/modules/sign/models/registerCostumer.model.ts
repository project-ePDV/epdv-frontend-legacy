export class RegisterCostumer {
  constructor(
    private name: string,
    private companyName: string,
    private email: string,
    private password: string,
    private confirmPassword: string
  ) {}
}