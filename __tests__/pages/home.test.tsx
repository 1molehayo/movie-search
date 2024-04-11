import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('When everything is OK in the Home page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
