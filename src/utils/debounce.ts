type Fetch<T> = (count: T) => Promise<void>;

export const debounceFetch = <T>(call: Fetch<T>, delay: number) => {
  let timer: NodeJS.Timeout;
  return (count: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      call(count);
    }, delay);
  };
};
