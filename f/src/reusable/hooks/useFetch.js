import { useEffect, useState } from "react";
import { fSocket, getter } from "../../api/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useFetch(rule, url, mess, f2b, u1, u2, u3, u4, u5, u6, u7) {
  const { data, refetch, isFetching } = useQuery({
    queryKey: [mess],
    queryFn: async () => {
      return getter(rule, url, mess, f2b);
    },
  });
  useEffect(() => {
    refetch();
  }, [u1, u2, u3, u4, u5, u6, u7, refetch]);
  return { data, isFetching };
}

export function useGet(b2f) {
  //last happening consuming data from BE
  const [apiData, apiDataSet] = useState();
  fSocket.on(`${b2f}B2F`, (data) => {
    apiDataSet(data);
  });
  return apiData;
}
