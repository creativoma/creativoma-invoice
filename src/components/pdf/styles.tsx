import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    border: "1px solid red",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    border: "1px solid red",
    width: "100%",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    border: "1px solid red",
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    border: "1px solid red",
    width: "100%",
  },
});
