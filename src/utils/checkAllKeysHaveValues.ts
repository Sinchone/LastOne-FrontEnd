// 객체 유효성 검사
// 파라미터로 들어가는 객체의 모든 키가 빈값이 아니라면 true를 반환합니다.

export const checkAllKeysHaveValues = (obj: Record<string, unknown>): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        if (!checkAllKeysHaveValues(value as Record<string, unknown>)) {
          return false;
        }
      } else if (value === '') {
        return false;
      }
    }
  }
  return true;
};
