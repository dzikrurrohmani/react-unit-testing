import { render, screen } from '@testing-library/react';
import AppLoading from '../../../shared/components/AppLoading/AppLoading';

const dummyLabel = 'dummy label';

describe('AppLoading', () => {
  test('Render Success', () => {
    render(<AppLoading label={dummyLabel} />);

    const labelElement = screen.getByText(dummyLabel);

    expect(labelElement).toBeInTheDocument();
  });
});
