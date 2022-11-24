import { fireEvent, render, screen } from '@testing-library/react';
import AppButton from '../../../shared/components/AppButton/AppButton';

const dummyLabel = 'dummy label';

describe('AppButton', () => {
  test('Render Success', () => {
    render(
      <AppButton label={dummyLabel}/>
    );

    const labelElement = screen.getByText(dummyLabel);

    expect(labelElement).toBeInTheDocument();
  });

  test("Button is disabled", () => {
    render(<AppButton label={dummyLabel} disabled={true} />);

    const labelElement = screen.getByText(dummyLabel);
    expect(labelElement).toBeDisabled();
  });

  test("Button event click", () => {
    const mockOnClick = jest.fn();
    render(<AppButton label={dummyLabel} onClick={mockOnClick} />);

    const labelElem = screen.getByText(dummyLabel);
    fireEvent.click(labelElem);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
