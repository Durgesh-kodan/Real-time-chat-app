# Private Chat App With React and Firebase (v9)

This project is a private chat application built using React and Firebase SDK version 9.

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites
Before you begin, make sure you have the following installed on your system:

* npm
* Git

### Installation
1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Deepaksh002/hat_and_notification_feature_codepth.git
   ```
2. Change to project repository:
   ```bash
   cd chat-application
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```
### Firebase Configuration

To run the app successfully, you need to set up Firebase and provide your Firebase configuration details.

Create a Firebase project on the Firebase Console.

In your Firebase project settings, navigate to the "General" tab, and scroll down to the "Your apps" section.

Click on the web app you want to use (or create a new one), and you will find the Firebase configuration details.

Create a `.env` file in the root directory of your project, and add the following variables with their corresponding values from your Firebase configuration:

    REACT_APP_API_KEY=YOUR_API_KEY
    REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    REACT_APP_DATABASE_URL=YOUR_DATABASE_URL
    REACT_APP_PROJECT_ID=YOUR_PROJECT_ID
    REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    REACT_APP_APP_ID=YOUR_APP_ID

### Running the app
Now that you have set up the project and Firebase configuration, you can run the app:
```bash
npm start
```
This will start the development server, and the app will be accessible at `http://localhost:3000` in your web browser.

## Usage

You can use this private chat app to communicate securely with others. Enjoy your private conversations!

## Live Link
https://hat-and-notification-feature-codepth.vercel.app/
