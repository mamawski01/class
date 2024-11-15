import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import Api, { fSocket } from "../../api/api";
import { StrPhrase } from "../../lib/utils";

export function useFetch(url, mess, f2b, u1, u2, u3, u4, u5, u6, u7) {
  const { data, refetch, isFetching } = useQuery({
    queryKey: [f2b],
    queryFn: async () => {
      return Api.simpleGetNull(url, mess, f2b);
    },
  });
  useEffect(() => {
    refetch();
  }, [u1, u2, u3, u4, u5, u6, u7, refetch]);
  return { data, isFetching };
}

export function usePreFetch(url, mess, f2b) {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [f2b],
      queryFn: async () => {
        return Api.simpleGetNull(url, mess, f2b);
      },
    });
    //cleaning
    return () => {};
  }, [queryClient, url, mess, f2b]);
}

// const deleteMutation = useMutation({
//   mutationFn: async (id) => {
//     console.log(id);
//     deleter(
//       "simple/null",
//       `/registryUserBEDeleteOne/${id}`,
//       "registryUserFEDeleteOne",
//       "registryUserBEDeleteOne"
//     );
//   },
// });

export function useGet(b2f) {
  //last happening consuming data from BE
  const [apiData, apiDataSet] = useState();
  fSocket.on(`${b2f}B2F`, (data) => {
    apiDataSet(data);
  });
  return apiData;
}

export function useDocumentTitle() {
  const location = useLocation();
  const docTitle = StrPhrase.capEach1stLetter(
    location.pathname.split("/").pop(),
  );

  //go to index.html, edit the <title></title>
  const documentTitleStr = `${docTitle} | Tiberio Optical`;

  return (document.title = documentTitleStr);
}
