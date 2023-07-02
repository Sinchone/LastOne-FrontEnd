import { useGetMyProfile } from '@hooks/MyPage/queries';

const useGetUserInfo = () => {
  const { data: user } = useGetMyProfile();
  const currentUserId = user?.data.member.id;
  const currentUserIsEdited = user?.data.member.isEdited;

  return { currentUserId, currentUserIsEdited };
};

export default useGetUserInfo;
