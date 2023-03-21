import { FC } from 'react';
import { Form, RecktangleField } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';
import { addOnsData } from './data';
import { StyledFormContent } from './AddOns.styled';

export const AddOns: FC = () => {
  const monthly = true;
  return (
    <>
      <ContentGroup>
        <TextWrapper>
          <StyledHeading2>Pick add-oons</StyledHeading2>
          <StyledParagraph color='gray'>
            Add ons help enhance your gaming experience.
          </StyledParagraph>
        </TextWrapper>
        <Form>
          {addOnsData.map(({ label, id, name, price, description }) => (
            <RecktangleField type='checkbox' key={id} id={id} name={name}>
              <StyledFormContent>
                <StyledParagraph as='span' weight='bold'>
                  {label}
                </StyledParagraph>
                <StyledParagraph as='span' color='gray' size='small'>
                  ${monthly ? price : price * 10}/{monthly ? 'mo' : 'yr'}
                </StyledParagraph>
                <StyledParagraph as='span' color='gray' size='small'>
                  {description}
                </StyledParagraph>
              </StyledFormContent>
            </RecktangleField>
          ))}
        </Form>
      </ContentGroup>

      <ButtonsWrapper>
        <Button>Next Step</Button>
        <Button variant='back-btn'>Go Back</Button>
      </ButtonsWrapper>
    </>
  );
};
