class Persons {
  private names: string; // 여기 내에서만 사용 가능
  public ages: number; //공용 어디서든 사용 가능
  readonly log: string; //접근만 할수 있고 실제로 값을 변경 할수 없다. 즉 읽기만 가능하다.

  constructor(names, ages) {
    this.names = names;
    this.ages = ages;
  }
}
