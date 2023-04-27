import { FC, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, RecktangleField, Switcher } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';
import { IDataForm } from 'lib/types';
import { FormContext } from 'lib/stores';
import { paths } from 'lib/constants';
import { selectPlanData } from './data';
import { StyledFormContent } from './SelectPlan.styled';

export const SelectPlan: FC = () => {
  const { formData, setFormData } = useContext(FormContext);

  const { register, handleSubmit, watch } = useForm<IDataForm>({
    defaultValues: { plan: formData.plan, yearlySubscription: formData.yearlySubscription }
  });
  const saveData = (data: Partial<IDataForm>) => {
    setFormData({ ...formData, ...data });
  };

  const yearlySubscriptionWatch = watch('yearlySubscription');

  const submitRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const navigateTo = (to: 'next' | 'back') => {
    submitRef?.current?.click();
    if (to === 'next') navigate(paths.addOns);
    if (to === 'back') navigate(paths.detailInfo);
  };

  return (
    <>
      <ContentGroup>
        <TextWrapper>
          <StyledHeading2>Select your plan</StyledHeading2>
          <StyledParagraph color='gray'>
            You have the option of monthly or yearly biling.
          </StyledParagraph>
        </TextWrapper>

        <Form ref={submitRef} onSubmit={handleSubmit(saveData)} variant='select-plan'>
          {selectPlanData.map(({ label, id, price, url }) => {
            return (
              <RecktangleField key={id} id={id} type='radio' register={register('plan')} value={id}>
                <StyledFormContent>
                  <img aria-hidden='true' src={url} alt='plan logo' />
                  <StyledParagraph as='span' weight='bold'>
                    {label}
                  </StyledParagraph>
                  <StyledParagraph as='span' color='gray' size='small'>
                    ${!yearlySubscriptionWatch ? price : price * 10}/
                    {yearlySubscriptionWatch ? 'mo' : 'yr'}
                  </StyledParagraph>
                  {yearlySubscriptionWatch && (
                    <StyledParagraph as='span' size='small'>
                      2 months free
                    </StyledParagraph>
                  )}
                </StyledFormContent>
              </RecktangleField>
            );
          })}

          <Switcher
            register={register('yearlySubscription')}
            uncheckedText='Monthly'
            checkedText='Yearly'
            id='yearlySubscription'
            name='yearlySubscription'
          />
        </Form>
      </ContentGroup>

      <ButtonsWrapper>
        <Button onClick={() => navigateTo('next')}>Next Step</Button>
        <Button onClick={() => navigateTo('back')} variant='back-btn'>
          Go Back
        </Button>
      </ButtonsWrapper>
    </>
  );
};
