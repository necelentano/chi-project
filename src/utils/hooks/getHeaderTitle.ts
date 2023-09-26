export const useGetHeaderTitle = (pathName: string): string => {
  const arr = pathName.split("/");

  const pathNameArr = arr[arr.length - 1].split("-");

  return pathNameArr
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join(" ");
};
