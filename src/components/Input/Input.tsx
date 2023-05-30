import React, { ReactElement, useMemo } from 'react';
import { ImageBox, InputContainer, InputElement, NextButton } from './input.styles';
import NextIcon from '../../assets/images/next.png';
import { useRecoilState } from 'recoil';
import { url } from '../../stores/atoms';
import validation from '../../utils/validation';
import download from '../../utils/download';

const Input = (): ReactElement => {
  const [value, setValue] = useRecoilState(url);
  const btnActive = useMemo(() => value.includes('communitydragon.org'), [value]);

  const submit = (): void => {
    if (!btnActive || !validation(value)) return;
    download(value);
  };

  return (
    <InputContainer>
      <InputElement value={value} onChange={(e) => setValue(e.target.value)} />
      <NextButton isActive={btnActive} onClick={submit}>
        <ImageBox src={NextIcon} />
      </NextButton>
    </InputContainer>
  );
};

export default Input;
