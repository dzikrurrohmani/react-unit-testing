import { fireEvent, render, screen } from '@testing-library/react';
import AppForm from '../../../shared/components/AppForm/AppForm';

const dummyLabel = 'dummy label';
const dummyName = 'dummy Name';
const dummyPlaceHolder = 'dummy PlaceHolder';
const dummyValue = 'dummy Value';

describe('AppForm', () => {
  test('Render Success Text', () => {
    render(
      <AppForm
        label={dummyLabel}
        placeholder={dummyPlaceHolder}
      />
    );

    const labelElement = screen.getByText(dummyLabel);
    const placeholderElement = screen.getByPlaceholderText(dummyPlaceHolder);

    expect(labelElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  });
  test('Render Success Number', () => {
    render(
      <AppForm
        label={dummyLabel}
        placeholder={dummyPlaceHolder}
        type='number'
      />
    );

    const labelElement = screen.getByText(dummyLabel);
    const placeholderElement = screen.getByPlaceholderText(dummyPlaceHolder);

    expect(labelElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  }); 
  test('Call onChange with Correct Param when Input Changed', () => {
    const mockOnChange = jest.fn();
    render(
      <AppForm
        name={dummyName}
        placeholder={dummyPlaceHolder}
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: dummyValue } });

    expect(mockOnChange).toHaveBeenCalledWith(dummyValue);
  });
});
