import { useState, useCallback, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

export default function useGetDataSourceWithSWR({
  url,
  method = "post",
  needPagenationInfo = false,
  needSortInfo = false,
  initialCondition,
  defaultSortKey = "",
  // defaultSortDirection = SORT_DIRECTION.Desc,
  dataRefactor,
  swrOption,
  autoFetch = false,
  noCondition
}) {
  const [condition, setCondition] = useState(initialCondition || {});
  const [dataSource, setDataSource] = useState();
  const [isReady, setIsReady] = useState(1 << Number(!!autoFetch));

  const { data } = useSWR(url, (url) => {
    console.log("url", url);
    return axios(url).then((res) => res.data);
  });

  useEffect(() => {
    console.log("data", data);
    if (data) {
      setDataSource(data);
    }
  }, [data]);

  const onReady = useCallback((value) => {
    setIsReady((prev) => prev << Number(value));
  });

  useEffect(() => {
    if (noCondition) {
      onReady(true);
    }
  }, [noCondition]);

  return {
    // fetching,
    dataSource,
    // boundedMutate,
    condition
    // onReady,
    // onUpdateCondition
  };
}
