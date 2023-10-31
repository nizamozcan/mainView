# mainView
 main View
## Use

React Native Main View is used to wrap components with customized background images, background colors, back buttons, or titles.

Example usage:

```jsx
import MainView from 'react-native-main-view';

// ...

<MainView
  backgroundImage={require("./src/back6.png")}
  header={{
    title: "Örnek Başlık",
    titleStyle: { color: "black" },
    backIcon: require("./src/background.jpeg"),
    backPress: () => console.log("Geri Düğmesi Tıklandı")
  }}
>
{/* Component content can go here */}
</MainView>
