const validation = (value: string): boolean => {
  if (!value.endsWith('/')) {
    alert("URL 주소는 '/' 기호로 끝나야 합니다.");
    return false;
  } else return true;
};

export default validation;
