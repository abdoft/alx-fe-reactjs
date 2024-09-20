import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from './Search';
import { GITHUB_API_URL } from '../services/githubService';

const mock = new MockAdapter(axios);

describe('Search Component', () => {
  afterEach(() => {
    mock.reset();
  });

  test('shows loading message during API call', async () => {
    mock.onGet(`${GITHUB_API_URL}/octocat`).reply(200, {
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      html_url: 'https://github.com/octocat',
    });

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Enter GitHub username'), {
      target: { value: 'octocat' },
    });
    fireEvent.click(screen.getByText('Search'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('octocat')).toBeInTheDocument();
    });
  });

  test('displays error message for non-existent user', async () => {
    mock.onGet(`${GITHUB_API_URL}/invaliduser`).reply(404);

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Enter GitHub username'), {
      target: { value: 'invaliduser' },
    });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText("Looks like we can't find the user")).toBeInTheDocument();
    });
  });

  test('displays user data when API call is successful', async () => {
    mock.onGet(`${GITHUB_API_URL}/octocat`).reply(200, {
      login: 'octocat',
      name: 'The Octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      html_url: 'https://github.com/octocat',
    });

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText('Enter GitHub username'), {
      target: { value: 'octocat' },
    });
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(screen.getByText('The Octocat')).toBeInTheDocument();
      expect(screen.getByAltText('octocat avatar')).toBeInTheDocument();
      expect(screen.getByText('View Profile')).toHaveAttribute('href', 'https://github.com/octocat');
    });
  });
});
