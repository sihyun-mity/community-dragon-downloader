import React, { ReactElement } from 'react';
import { TitleHeading } from './title.styles';

interface PropsType {
  children: string;
}

const Title = (props: PropsType): ReactElement => {
  return <TitleHeading>{props.children}</TitleHeading>;
};

export default Title;
