import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import Home from '@/pages/index'
// import Home from '@/app/index';
import Home from "@/app/page";



describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading')

    expect(heading).toHaveTextContent(/hello world/i)
  })
})
