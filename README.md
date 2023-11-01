# mainView
 main View
## Use

React Native Main View is used to wrap components with customized background images, background colors, back buttons, or titles.

for installation
npm i react-native-main-view

Example usage:

```jsx
import MainView from 'react-native-main-view';

// ...

for installation
npm i react-native-main-view


<MainView
  backgroundImage={require("./src/back6.png")}
  header={{
    title: "Example Title",
    titleStyle: { color: "black" },
    backIcon: require("./src/background.jpeg"),
    backPress: () => console.log("Click Press")
  }}
>
{/* Component content can go here */}
</MainView>
