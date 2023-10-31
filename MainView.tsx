import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ColorValue,
  ImageProps,
  ViewStyle,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity, TextStyle, ScrollView
} from "react-native";

interface Props {
  backgroundColor?: ColorValue;
  backgroundImage?: ImageProps;
  children?: any;
  mainViewStyle?: ViewStyle;
  header?: {
    backIcon?: ImageProps
    backPress?: () => void
    backIconStyle?: ViewStyle
    headerStyle?: ViewStyle
    title?:string
    titleStyle?:TextStyle
  };
}

const MainView = (props: Props) => {
  const {
    backgroundColor,
    backgroundImage,
    children,
    mainViewStyle,
    header
  } = props;

  return (
    <SafeAreaView style={{ flex: 1, ...mainViewStyle }}>
      <ImageBackground
        source={backgroundImage} style={styles.ImageContainer}>
        <ScrollView style={{ padding: 8 }}>
          <View style={{ flexDirection: "row", ...header?.headerStyle }}>
            <TouchableOpacity style={{ flex: 0.4 }} onPress={header?.backPress}>
              {header?.backIcon && (<Image source={header?.backIcon} style={[styles.backImage,header?.backIconStyle]} />)}
            </TouchableOpacity>
            {header?.title && (<Text style={[styles.title,header?.titleStyle]}>{header?.title}</Text>)}
          </View>
          {props?.children}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    resizeMode: "cover"
  },
  backImage: { height: 40, width: 40, borderRadius: 10 },
  title: { fontWeight: "bold", fontSize: 20, flex: 0.6, alignSelf: "center" }

});
export default MainView;
