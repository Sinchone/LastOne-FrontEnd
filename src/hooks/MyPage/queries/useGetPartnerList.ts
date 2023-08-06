import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/querykeys';
import { getPartnerList } from '@apis/partner';

const useGetPartnerList = () => {
    const queryResult = useQuery(queryKeys.partner, () => getPartnerList());

    return {
        data: queryResult.data,
        isLoading: queryResult.isLoading,
        refetch: queryResult.refetch,
    };
};

export default useGetPartnerList;
