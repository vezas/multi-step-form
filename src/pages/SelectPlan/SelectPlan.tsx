import { FC, useState } from 'react';
import { Form, RecktangleField, Switcher } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';
import { selectPlanData } from './data';
import { StyledFormContent } from './SelectPlan.styled';

export const SelectPlan: FC = () => {
  const [monthly, setMonthly] = useState(true);
  const togglePeriod = () => setMonthly((prevState) => !prevState);

  return (
    <>
      <ContentGroup>
        <TextWrapper>
          <StyledHeading2>Select your plan</StyledHeading2>
          <StyledParagraph color='gray'>
            You have the option of monthly or yearly biling.
          </StyledParagraph>
        </TextWrapper>

        <Form variant='radio'>
          {selectPlanData.map(({ label, name, id, price, url }) => (
            <RecktangleField type='radio' key={id} id={id} name={name}>
              <StyledFormContent>
                <img aria-hidden='true' src={url} alt='plan logo' />
                <StyledParagraph as='span' weight='bold'>
                  {label}
                </StyledParagraph>
                <StyledParagraph as='span' color='gray' size='small'>
                  ${monthly ? price : price * 10}/{monthly ? 'mo' : 'yr'}
                </StyledParagraph>
                {!monthly && (
                  <StyledParagraph as='span' size='small'>
                    2 months free
                  </StyledParagraph>
                )}
              </StyledFormContent>
            </RecktangleField>
          ))}

          <Switcher
            uncheckedText='Monthly'
            checkedText='Yearly'
            onChange={togglePeriod}
            id='period'
            name='plan-period'
          />
        </Form>
      </ContentGroup>

      <ButtonsWrapper>
        <Button>Next Step</Button>
        <Button variant='back-btn'>Go Back</Button>
      </ButtonsWrapper>
    </>
  );
};
