import { FC, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormField, StyledInput, Form } from 'lib/components/Forms';
import { StyledParagraph, StyledHeading2 } from 'lib/components/Typography';
import { Button, ContentGroup, ButtonsWrapper, TextWrapper } from 'lib/components/UI';
import { IDataForm } from 'lib/types';
import { FormContext } from 'lib/stores';
import { paths } from 'lib/constants';

export const PersonalInfo: FC = () => {
  const { formData, setFormData } = useContext(FormContext);

  const { register, handleSubmit } = useForm<Partial<IDataForm>>({
    defaultValues: { name: formData.name, email: formData.email, phone: formData.phone }
  });

  const saveData = (data: Partial<IDataForm>) => setFormData({ ...formData, ...data });

  const submitRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const navigateTo = (to: 'next' | 'next') => {
    submitRef?.current?.click();
    if (to === 'next') navigate(paths.selectPlan);
  };

  return (
    <>
      <ContentGroup>
        <TextWrapper>
          <StyledHeading2>Personal info</StyledHeading2>
          <StyledParagraph color='gray'>
            Please provide your name, email address and phone number.
          </StyledParagraph>
        </TextWrapper>
        <Form ref={submitRef} onSubmit={handleSubmit(saveData)}>
          <FormField label='Name'>
            <StyledInput
              {...register('name')}
              id='name'
              type='text'
              placeholder='e.g. Stephen King'
            />
          </FormField>
          <FormField label='Email Adress'>
            <StyledInput
              {...register('email')}
              id='email'
              type='email'
              placeholder='e.g. stephenking@lorem.com'
            />
          </FormField>
          <FormField label='Phone Number'>
            <StyledInput
              {...register('phone')}
              id='phone'
              type='phone'
              placeholder='e.g. +1 234 567 890'
            />
          </FormField>
        </Form>
      </ContentGroup>

      <ButtonsWrapper>
        <Button type='submit' onClick={() => navigateTo('next')}>
          Next Step
        </Button>
      </ButtonsWrapper>
    </>
  );
};
