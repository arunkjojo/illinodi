# illinodi

    illinodi project has tow main domains-
        - front-end    :   React Typescript PWA TWA Responsive Material UI
        - back-end     :   .Net API

# front-end

    - Creating react application with typescript.

        `$ npx create-react-app <project_name> --template=typescript`
        or<br/>
        `$ yarn create react-app <project_name> --template=typescript`

    In here, we are create new project inside the frontend directory.

        `$ cd frontend`<br/>
        `$ yarn create react-app . --template cra-template-pwa-typescript`

# # folder-structure

    - src : Source code for the whole application especially for React codes.
        - assets : It include the assets for the project like images, svg, brand and logo image.
        - components : All components are included here, to using the Application.
        - css : All style  files are included here.
        - pages: Each of the pages inside of application like sign-in, sing-up, dashboard, main, setting, and profile.
        - test: Testing files like App.text.tsx.
        - utils: It include utilize for application like APIs, Authentication, Routes management, and State management.

# Capacitor
    Install Capacitor: `$ npm install @capacitor/core @capacitor/cli`

    Create a config for your app: `$ npx cap init`
        - appId: 'com.inluxi.illinodi',
        - appName: 'illinodi',

    Build the Web App: `$ npm run build`
    
    Install the native platforms: `$ npm i @capacitor/android @capacitor/ios`
        - Add android: `$ npx cap add android`
        - Add IOs: `$ npx cap add ios`

    Open the native platforms: 
        - Open android Studio: `$ npx cap open android`
        - Open XCode: `$ npx cap open ios`

    Help: `$ npx cap [-V] [-h] [<command>]`

