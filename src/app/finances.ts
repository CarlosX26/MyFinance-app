interface IFinance {
  id: string;
  description: string;
  value: number;
  type: string;
}

const listFinances: IFinance[] =
  JSON.parse(localStorage.getItem("@myFinance")!) ?? [];

export { IFinance, listFinances };
