import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isReadChattingState } from '@recoil/chatting';
import { subscribForList } from '@apis/chatting';

const useChatSubscription = (currentUserId: number, callback?: () => void) => {
  const [isRead, setIsRead] = useRecoilState(isReadChattingState);

  useEffect(() => {
    subscribForList(currentUserId, () => {
      setIsRead(false);
      if (callback) {
        callback();
      }
    });
  }, [currentUserId, callback]);
};

export default useChatSubscription;
