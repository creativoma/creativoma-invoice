"use client";

import React from "react";
import { Page, Text, Document } from "@react-pdf/renderer";
import { styles } from "@/components/pdf/styles";
import { MyDocumentArgs } from "@/components/pdf/types";

const MyDocument: React.FC<{ args: MyDocumentArgs }> = ({ args }) => (
  <Document title={args.title}>
    <Page style={styles.body}>
      <Text style={styles.title}>{args.title}</Text>
      <Text style={styles.author}>{args.author}</Text>
      <Text style={styles.text}>{args.content}</Text>
    </Page>
  </Document>
);

export default MyDocument;
