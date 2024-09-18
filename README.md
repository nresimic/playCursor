# PlayCursor

PlayCursor is an automated testing project using Playwright for end-to-end testing of web applications.

## Description

This project demonstrates how to set up and run automated tests using Playwright, a powerful tool for browser automation. It includes tests for various web elements and interactions, showcasing best practices in test automation.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/nresimic/playCursor.git
   ```

2. Navigate to the project directory:
   ```
   cd playCursor
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Usage

To run the tests:

```
npx playwright test
```

To run tests with UI:

```
npx playwright test --ui
```

## Project Structure

- `tests/`: Contains test files
- `pages/`: Page Object Models for different pages of the application
- `.github/workflows/`: GitHub Actions workflow for CI

## Contributing

Contributions to improve the test suite or add new features are welcome. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## CI/CD

This project uses GitHub Actions for continuous integration. The workflow can be triggered manually and uses 3 workers to run tests in parallel.

To trigger the CI manually:
1. Go to the "Actions" tab in the GitHub repository
2. Select the "Manual CI" workflow
3. Click "Run workflow"
4. Choose the type of test to run (all, unit, or integration)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Nenad Resimic - [GitHub Profile](https://github.com/nresimic)

Project Link: [https://github.com/nresimic/playCursor](https://github.com/nresimic/playCursor)
