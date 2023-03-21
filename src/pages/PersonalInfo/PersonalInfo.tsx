import { FC } from 'react';
import { FormField, StyledInput, Form } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';

export const PersonalInfo: FC = () => {
  return (
    <>
      <ContentGroup>
        <TextWrapper>
          <StyledHeading2>Personal info</StyledHeading2>
          <StyledParagraph color='gray'>
            Please provide your name, email address and phone number.
          </StyledParagraph>
        </TextWrapper>
        <Form>
          <FormField label='Name'>
            <StyledInput id='name' placeholder='e.g. Stephen King' />
          </FormField>
          <FormField label='Email Adress'>
            <StyledInput id='email' placeholder='e.g. stephenking@lorem.com' />
          </FormField>
          <FormField label='Phone Number'>
            <StyledInput id='phone' placeholder='e.g. +1 234 567 890' type='email' />
          </FormField>
        </Form>
      </ContentGroup>

      <ButtonsWrapper>
        <Button>Next Step</Button>
      </ButtonsWrapper>
    </>
  );
};
