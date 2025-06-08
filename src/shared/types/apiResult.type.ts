export type ApiResultType<T extends (...args: any) => Promise<any>> = Awaited<
  ReturnType<T>
>;
