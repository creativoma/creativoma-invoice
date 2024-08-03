'use client'

import React from 'react';
import { Page, Text, Document } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',

  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const MyDocument = ({ title, author, content } : { title: string, author: string, content: string }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.text}>{content}</Text>
    </Page>
  </Document>
);

export default MyDocument;