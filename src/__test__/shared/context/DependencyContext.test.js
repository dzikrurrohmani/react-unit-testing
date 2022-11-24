import { render, screen } from '@testing-library/react';
import { DependencyProvider } from '../../../shared/context/DependencyContext';

const dummyComponent = 'dummy Component'

describe('View State Hook', () => {
  test('Render Success', () => {
    render(
        <DependencyProvider>
            <div>{dummyComponent}</div>
        </DependencyProvider>
    )
    const componentElement = screen.getByText(dummyComponent)

    expect(componentElement).toBeInTheDocument()
  });
});
