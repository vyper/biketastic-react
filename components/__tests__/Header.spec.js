import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('Components / Header', () => {
  it('renders the header correctly', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
