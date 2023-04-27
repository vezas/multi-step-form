import { FC, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, RecktangleField } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';
import { IDataForm } from 'lib/types';
import { FormContext } from 'lib/stores';
import { paths } from 'lib/constants';
import { addOnsData } from './data';
import { StyledFormContent } from './AddOns.styled';

export const AddOns: FC = () => {
  const { formData, setFormData } = useContext(FormContext);

  const { register, handleSubmit } = useForm<IDataForm>({ defaultValues: { adds: formData.adds } });
  const saveData = (data: Partial<IDataForm>) => {
    setFormData({
      ...formData,
      ...data
    });
  };

  const submitRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const navigateTo = (to: 'next' | 'back') => {
    submitRef?.current?.click();
    if (to === 'next') navigate(paths.summary);
    if (to === 'back') navigate(paths.selectPlan);
  };

  return (
    <>
      <ContentGroup>
        <TextWrapper>
          <StyledHeading2>Pick add-oons</StyledHeading2>
          <StyledParagraph color='gray'>
            Add ons help enhance your gaming experience.
          </StyledParagraph>
        </TextWrapper>
        <Form ref={submitRef} onSubmit={handleSubmit(saveData)}>
          {addOnsData.map(({ label, id, price, description }) => (
            <RecktangleField
              key={id}
              id={id}
              register={register(`adds.${id}` as keyof IDataForm)}
              type='checkbox'
            >
              <StyledFormContent>
                <StyledParagraph as='span' weight='bold'>
                  {label}
                </StyledParagraph>
                <StyledParagraph as='span' color='gray' size='small'>
                  ${formData.yearlySubscription ? price * 10 : price}/
                  {formData.yearlySubscription ? 'yr' : 'mo'}
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
        <Button onClick={() => navigateTo('next')}>Next Step</Button>
        <Button onClick={() => navigateTo('back')} variant='back-btn'>
          Go Back
        </Button>
      </ButtonsWrapper>
    </>
  );
};
