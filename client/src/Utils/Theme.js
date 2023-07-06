import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  };
  .navbar-title {
    color: ${({ theme }) => theme.text};
    pointer-events: none;
  };
  .bar-icon {
    color: ${({ theme }) => theme.text};
  }
  .task-card {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
  };
  .add-task-modal {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
  };
  .update-task-modal {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
  };
  .update-button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
  };
  
  .update-button:hover {
    background: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  .delete-button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
  };
  
  .delete-button:hover {
    background: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  .add_task_button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
  };
  
  .add_task_button:hover {
    background: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
};
