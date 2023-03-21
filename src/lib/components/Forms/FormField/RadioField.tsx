import { StyledParagraph } from 'lib/components/Typography';
import { FC } from 'react';
import { StyledRadioLabel, FormFieldContainer } from './FormField.styled';

interface RadioFieldProps {
  id: string;
  label: string;
  name: string;
  url: string;
  price: number;
  period: boolean;
}

export const RadioField: FC<RadioFieldProps> = ({ id, label, name, url, price, period }) => {
  return (
    <FormFieldContainer>
      <StyledRadioLabel htmlFor={id}>
        <img aria-hidden={true} src={url} alt='plan logo' />
        <StyledParagraph as='span' weight='bold'>
          {label}
        </StyledParagraph>
        <StyledParagraph as='span' color='gray' size='small'>
          ${period ? price : price * 10}/{period ? 'mo' : 'yr'}
        </StyledParagraph>
        {!period && (
          <StyledParagraph as='span' size='small'>
            2 months free
          </StyledParagraph>
        )}
      </StyledRadioLabel>
      <input type='radio' id={id} name={name} />
    </FormFieldContainer>
  );
};
