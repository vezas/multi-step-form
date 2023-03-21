import { FC, useState } from 'react';
import { Form, RadioField, Switcher } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';
import { selectPlanData } from './data';

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
            <RadioField
              period={monthly}
              key={id}
              label={label}
              id={id}
              name={name}
              price={price}
              url={url}
            />
          ))}
          <Switcher onChange={togglePeriod} id='period' name='plan-period' />
        </Form>
      </ContentGroup>

      <ButtonsWrapper>
        <Button>Next Step</Button>
        <Button variant='back-btn'>Go Back</Button>
      </ButtonsWrapper>
    </>
  );
};
