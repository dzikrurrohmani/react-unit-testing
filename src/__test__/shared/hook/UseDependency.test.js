import { renderHook, act } from '@testing-library/react';
import { DependencyContext } from '../../../shared/context/DependencyContext';
import { useDependency } from '../../../shared/hook/UseDependency';

const mockUseContext = jest.fn();

jest.mock("react", ()=> ({
    ...jest.requireActual('react'),
    useContext : (e) => mockUseContext(e)
}))

describe('View State Hook', () => {
  test('Render Success', () => {
    renderHook(() => useDependency());
    expect(mockUseContext).toHaveBeenCalledWith(DependencyContext)
  });
});
