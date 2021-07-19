export interface IRouter {
  path: string;
  display: string;
  exact: boolean;
}

export const routes: Array<IRouter> = [
  {
    path: "/how-to-install",
    display: "How to install ",
    exact: true,
  },
  {
    path: "/example",
    display: "Example",
    exact: true,
  },
];
