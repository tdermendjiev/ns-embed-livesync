

# NativeScript Simulator LiveSync for Embedders

This repository provides a simple script for NativeScript embedders to "livesync" their NativeScript apps to their iOS simulators. It's designed to be invoked after the `ns prepare ios` command.

## Prerequisites

- Node.js
- NativeScript CLI

## Setup

1. Clone this repository:

```bash
git clone https://github.com/tdermendjiev/ns-embed-livesync
```

2. Navigate to the directory:

```bash
cd ns-embed-livesync
```

3. Install the required npm packages:

```bash
npm install
```

4. Modify the placeholders in the `index.js` script:

   - `projectFilesPath`: The path to your NativeScript project's iOS platform files. For example:

     ```javascript
     const projectFilesPath = "/path/to/your/project/platforms/ios/yourprojectname/app";
     ```

   - `appId`: The bundle identifier of your app. For example:

     ```javascript
     const appId = 'com.mycompany.MyCoolApp';
     ```

## Usage

1. Prepare your NativeScript app for iOS:

```bash
ns prepare ios
```

2. Run the script:

```bash
node index.js
```

This will sync your app's content to all running iOS simulators.

## Troubleshooting

If you encounter any issues, ensure:

- Your iOS simulators are running.
- You've correctly set the `projectFilesPath` and `appId` in the `index.js` script.
- You've installed all required npm packages.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements!

## License

This script is provided "as is" without warranty of any kind. Use at your own risk.

---

Happy coding! 🚀